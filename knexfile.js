module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3'
    },
    useNullAsDefault: true, //<--When using SQL, make sure this is key-value pair is here or you're going to have issues
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  staging: {

  },

  production: {

  }

};
