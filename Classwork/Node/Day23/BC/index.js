const express = require('express');
const app = express();
const fs = require('fs')
const path = '../../Day8/I(bonus)/';

app
.use('/assets', function(req, res, next){
    fs.createReadStream(`${path}assets/${req.url}`).pipe(res);
})
.get('/', function (req, res) {
    fs.createReadStream(`${path}main.html`).pipe(res);
})
.post('/', function(req,res){
    res.send('post recieved');
})
.listen(8080);