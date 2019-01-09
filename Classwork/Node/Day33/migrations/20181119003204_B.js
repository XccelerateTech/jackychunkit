
exports.up = function (knex, Promise) {
    return knex.schema.table('users', (table) => {
        table.increments();
        table.string("username");
        table.string("email");
        table.string("password");
        table.boolean("active");
        table.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.table('users', (table) => {
        table.dropColumns("id","username","email","password","active");
        table.dropTimestamps()
    });
};
