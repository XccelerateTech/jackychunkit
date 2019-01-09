const redis = require('redis');
const express = require('express');
const app = express();
const rp = require('request-promise');
const client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.on('error', err => {
    throw err
});
const call = async () => {
    try {
        let hashes = [];
        const latestBlock = await rp(`https://blockchain.info/latestblock`);
        const hashKey = JSON.parse(latestBlock).hash;
        const singleBlock = await rp(`https://blockchain.info/rawblock/${hashKey}`);
        const tx = JSON.parse(singleBlock).tx
        tx.forEach(element => {
            hashes.push(element.hash)
        });
        client.setex('hash', 600, JSON.stringify(hashes))
        app.get('/', (req, res) => {
            client.get('hash', (err, data) => {
                res.json(data)
            })
        })
    } catch (err) {
        throw err
    }
}
setInterval(call, 1000 * 60 * 10);
call();
app.listen(8080, () => { console.log(`A.js started ${new Date()}`) })