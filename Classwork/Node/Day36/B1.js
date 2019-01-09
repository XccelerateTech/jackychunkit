const redis = require('redis');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.on('error', err => {
    throw err
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/api/message', (req, res) => {
    const message = {
        message: req.body.message,
        time: req.body.date
    }
    client.lpush('message', JSON.stringify(message))
    res.status(200);
})
app.listen(3030, () => console.log(`B1.js ran at ${new Date()}`));