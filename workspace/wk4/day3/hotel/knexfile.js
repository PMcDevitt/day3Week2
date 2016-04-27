// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'hotels_development'
    }
  },
  test: {
    client: 'postgresql',
    connection: {
      database: 'hotels_test'
    }
  }
};
