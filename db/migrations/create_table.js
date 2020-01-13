exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('olympians', function(table) {
      table.increments('id').primary();
      table.text('Name');
      table.text('Sex');
      table.integer('Age');
      table.integer('Height');
      table.integer('Weight');
      table.text('Team');
      table.text('Games');
      table.text('Sport');
      table.text('Event');
      table.text('Medal');

      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('olympians')
  ]);
}
