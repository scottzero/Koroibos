exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('olympians', function(table) {
      table.increments('id').primary();
      table.text('name');
      table.text('sex');
      table.float('age');
      table.float('height');
      table.float('weight');
      table.text('team');
      table.text('games');
      table.text('sport');
      table.text('event');
      table.text('medal');

      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('olympians')
  ]);
}
