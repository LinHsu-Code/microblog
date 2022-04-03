/**
 * @description configuration file
 * @author Lin
 */

// const { isProd } = require('../env');

const mysqlConfig = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '123456',
  DB: 'node_express_sequelize_miniblog_db',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

const redisConfig = {
  port: 6379,
  host: '127.0.0.1',
};

// if (isProd) {
//   // redisConfig = production configration
// }

module.exports = {
  mysqlConfig,
  redisConfig,
};
