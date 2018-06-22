
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', (table) => {
    table.increments()
    table.integer('products_id').notNullable().references('products.id')
    table.integer('users_id').notNullable().references('users.id')
    // table.foreign('products_id').references('tablename.fieldname')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders')
}
