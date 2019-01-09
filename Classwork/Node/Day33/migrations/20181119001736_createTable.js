
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', () => {});
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users');
}