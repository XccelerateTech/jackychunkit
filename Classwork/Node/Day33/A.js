require('dotenv').config();
const fs = require('fs');
const CsvReadableStream = require('csv-reader');
require('dotenv').config();
const knex = require('knex')({
    client: 'postgres',
    connection: {
        database: "fruits",
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    }
});
(() => {
    fs.createReadStream('transaction_record.csv', 'utf8')
        .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
        .on('data', async data => {
            //defining individual data that we'll use here to prevent code being to messy
            const buy = (data[0] === 'BUY') ? true : false;
            const fruitName = data[1];
            const quantityChanged = data[2];
            knex.transaction(async trx => {
                try {
                    (buy) ?
                        await knex.select('*').from('stock')
                            .whereIn('citrus_id',
                                knex.select('id').from('citrus')
                                    .where('name', fruitName))
                            .increment('quantity', quantityChanged) :

                        await knex.select('*').from('stock')
                            .whereIn('citrus_id',
                                knex.select('id').from('citrus')
                                    .where('name', fruitName))
                            .where('quantity', '>=', quantityChanged)
                            .decrement('quantity', quantityChanged);
                    trx.commit;
                } catch (e) {
                    trx.rollback;
                    throw e
                }
            })
        })
})();
