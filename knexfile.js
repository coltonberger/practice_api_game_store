'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/gamestore_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/gamestore_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
