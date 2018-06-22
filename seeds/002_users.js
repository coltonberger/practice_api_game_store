
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Johnny So and So'},
        {id: 2, name: 'Tommy Fourfingers'},
        {id: 3, name: 'Bruce Wayne'}
      ])
    })
    .then(() => {
      return knex.raw(
        "Select setval('users_id_seq', (SELECT MAX(id) FROM users));"
      )
    })
}
