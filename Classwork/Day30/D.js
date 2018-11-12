const pg = require('pg');
const secret = require('./secret.json');

const client = new pg.Client({
    user: 'postgres',
    database: 'fruits',
    password: secret.password,
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
});

client.connect();

client.query('SELECT * FROM citrus', (err, results) => {
    (err) ?
    console.error(err) :
    results.rows.forEach(e => {
        if (e.color == 'orange') console.log(e)
    })
})
//apply extra query on the request
client.query(`SELECT * FROM citrus WHERE color = 'orange'`, (err, results) => {
    (err) ?
    console.error(err) :
    console.log(results.rows);
})