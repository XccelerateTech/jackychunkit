module.exports = AuthChallenger = function(knex) {
    return async (username, password, callback) => {
        try {
            const data = await knex.select('username').from('users').where('username', username).where('password', password);
            return callback(null, (data.length === 1) ? true : false);
        } catch (err) {
            return callback(err);
        }
    }
}