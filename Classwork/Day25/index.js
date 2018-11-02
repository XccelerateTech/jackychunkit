const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const myPromise = require('./promise.js');
const promise = new myPromise;
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload())
app.use(express.static('storage'))

//get request for root path '/', render the html page
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
})
app.get('/assets/main.js', (req, res) => {
	res.sendFile(__dirname + '/assets/main.js');
})
//get request when page is loading, and look for what files are already on the dropbox
app.get('/storage', (req, res) =>{
	promise.findDir('./storage/').then(data => {
		res.send(data)
	}).catch(e => {
		res.send(e.message);
	})
})
//get request for download the files
app.get('/storage/:name', (req, res) =>{
	//parse the path just incase there is space or special characters in the file name that the code cannot render
	const path = decodeURIComponent(req._parsedOriginalUrl.path);
	promise.download(path).then(fileData => {
		res.send(fileData)
	}).catch(e => {
		res.send(e.message);
	})
})
//post request to the storage
app.post('/storage', (req, res) => {
	try {
		const filename = req.files.upload.name
		if (filename.includes('@'||'#'||'$'||'%'||'^'||'&')) {
			res.status(500).end('filename should not include special characters')
		}
		const filedata = req.files.upload.data
		promise.upload(filename, filedata).then(() => {
			res.send(filename)
		}).catch(e => {
			res.send(e.message);
		})
	} catch {
		//Empty file is not supported on express
		res.status(500).end("Empty file should not be uploaded to the dropbox")
	}
})
app.listen(8080)

