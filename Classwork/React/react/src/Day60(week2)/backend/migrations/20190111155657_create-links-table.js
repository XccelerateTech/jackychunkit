
exports.up = function(knex, Promise) {
  return knex.schema.createTable('links', table => {
      table.increments();
      table.string('title');
      table.string('tags');
      table.string('url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('links');
};
