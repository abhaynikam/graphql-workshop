// Change the username and password to match user on your system with access to PostgreSQL
module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'todo_list_development',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'postgres',
    database: 'todo_list_test',
    dialect: 'postgres',
  },
  production: {
    username: 'postgres',
    password: 'postgres',
    database: 'todo_list_production',
    dialect: 'postgres',
  },
};
