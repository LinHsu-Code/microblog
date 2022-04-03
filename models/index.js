const debug = require('debug')('mysql');
const { Sequelize, DataTypes } = require('sequelize');
const { mysqlConfig } = require('../config/dbConfig');

const sequelize = new Sequelize(
  mysqlConfig.DB,
  mysqlConfig.USER,
  mysqlConfig.PASSWORD,
  {
    host: mysqlConfig.HOST,
    dialect: mysqlConfig.dialect,

    pool: {
      max: mysqlConfig.pool.max,
      min: mysqlConfig.pool.min,
      acquire: mysqlConfig.pool.acquire,
      idle: mysqlConfig.pool.idle,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    debug('connected...');
  })
  .catch((err) => {
    debug(`Error:${err}`);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.products = require("./productModel.js")(sequelize, DataTypes);
// db.reviews = require("./reviewModel.js")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => {
    debug('yes, re-sync done!');
  })
  .catch(() => {
    debug('no, re-sync failed!');
  });

module.exports = db;
