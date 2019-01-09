const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app
// parse application/x-www-form-urlencoded
.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
.use(bodyParser.json())
.post('/', (req,res) => {
    res.json({"sum":req.body.reduce(((acc,val) => acc + val))})
})
.listen(8080);