
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bookings', table => {
        table.increments("id");
        table.date("date");
        table.string("remark");
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('bookings');
};
