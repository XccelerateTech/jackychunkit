const fs = require('fs');
const pg = require('pg');
const CsvReadableStream = require('csv-reader');
const secret = require('./secret.json');
const client = new pg.Client({
    user: 'postgres',
    database: 'fruits',
    password: secret.password,
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
});
client.connect();
(async () => {
    try {
        await fs.createReadStream('transaction_record.csv', 'utf8')
            .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
            .on('data', async data => {
                //defining individual data that we'll use here to prevent code being to messy
                const buy = (data[0] === 'BUY') ? true : false;
                const fruitName = data[1];
                const quantityChanged = data[2];
                //defining the queries here to prevent code being too messy due to the long string
                const addStockQuery = `UPDATE stock SET quantity = quantity + ${quantityChanged} FROM citrus WHERE stock.citrus_id = citrus.id AND citrus.name = '${fruitName}'`;
                const checkStockQuery = `SELECT quantity FROM stock JOIN citrus ON citrus.id = stock.citrus_id WHERE citrus.name = '${fruitName}';`
                const sellStockQuery = `UPDATE stock SET quantity = quantity - ${quantityChanged} FROM citrus WHERE stock.citrus_id = citrus.id AND citrus.name = '${fruitName}'`
                try {
                    await client.query('BEGIN');
                    (buy) ?
                        await client.query(addStockQuery) :
                        await client.query(checkStockQuery, async (err, results) => {
                            (results.rows[0].quantity >= quantityChanged) ?
                                await client.query(sellStockQuery) : console.log('Out of Stock');
                        });
                    await client.query('COMMIT');
                } catch (err) {
                    await client.query('ROLLACK');
                    throw err;
                }
            })
    } catch (err) {
        throw err;
    }
})();