
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table){
    table.increments() // Primary id column that auto increments
    table.string('title')
    table.string('author')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
}
