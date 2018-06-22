
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', (table) => {
    table.increments()
    table.string('title').notNullable()
    table.text('description')
    table.decimal('price').notNullable()
    table.integer('stock')
    table.string('category')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products')
}
