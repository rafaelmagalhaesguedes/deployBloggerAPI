const options = {
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  database: process.env.MYSQLDATABASE,
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
};

module.exports = { development: options, production: options, test: options };
