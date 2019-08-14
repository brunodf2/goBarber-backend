require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'goBarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoreAll: true,
  },
};
