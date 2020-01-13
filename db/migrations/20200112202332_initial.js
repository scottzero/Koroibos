exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('olympians', function(table) {
      table.increments('id').primary();
      table.string('Name');
      table.string('Sex');
      table.integer('Age');
      table.integer('Height');
      table.integer('Weight');
      table.string('Team');
      table.integer('Games');
      table.string('Sport');
      table.string('Event');
      table.string('Medal');

      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('olympians')
  ]);
}
