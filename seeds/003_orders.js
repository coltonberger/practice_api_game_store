
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function() {
      // Inserts seed entries
      return knex('orders').insert([
        {id: 1, products_id: 2, users_id: 1},
        {id: 2, products_id: 1, users_id: 3},
        {id: 3, products_id: 3, users_id: 1}
      ])
    })
    .then(() => {
      return knex.raw(
        "Select setval('orders_id_seq', (SELECT MAX(id) FROM orders));"
      )
    })
}
