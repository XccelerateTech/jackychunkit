import * as dotenv from 'dotenv'
import * as Knex from 'knex';
dotenv.config();

export default Knex({
    client: 'postgresql',
    connection: {
        database: process.env.DB_NAME,
        host: process.env.IP,
        password: process.env.DB_PASSWORD,
        user: process.env.DB_USERNAME,
    }
});
