
exports.up = function (knex, Promise) {
    return knex.schema.table('users', (table) => {
        table.integer('group_id').unsigned();
        table.foreign('group_id').references('groups.id');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.table('users', (table) => {
        table.dropForeign('group_id');
        table.dropColumn('group_id');
    })
};
