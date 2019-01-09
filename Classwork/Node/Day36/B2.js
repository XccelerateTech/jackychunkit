const redis = require('redis');
const client = redis.createClient({
    host: 'localhost',
    port: 6379
});
client.on('error', err => {
    throw err
});
client.rpop('message');
console.log(`B2.js started ${new Date()}`)