// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'crud_books_development'
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      database: 'crud_books_test'
    }
  }

};
