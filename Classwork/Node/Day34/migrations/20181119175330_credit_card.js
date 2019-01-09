
exports.up = function (knex, Promise) {
    return knex.schema.createTable('credit_cards', (table) => {
        table.increments();
        table.integer('credit_card_number').unique();
        table.string('holder')
        table.foreign('holder').references('accounts.name');
        table.date('expiry_date');
        table.integer('account_id').unsigned();
        table.foreign('account_id').references('accounts.id');
        table.timestamps(false, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('credit_cards')
};
