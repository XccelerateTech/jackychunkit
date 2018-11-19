const knex = require('knex');
const knexConfig = require('./config/knexfile').development;

module.exports = AuthChallenger = async (username, password, callback) => {
    try {
        const rows = await knex(knexConfig).select('username').from('users').where('username', username).where('password', password);
        return callback(null, (rows.length === 1) ? true : false);
    } catch (err) {
        return callback(err);
    }
}
