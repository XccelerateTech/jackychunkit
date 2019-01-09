
exports.up = function (knex, Promise) {
    return knex.schema.createTable('accounts', (table) => {
        table.increments();
        table.string('name');
        table.integer('phone_number')
        table.string('ID_card_number');
        table.timestamps(false, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('accounts')
};
