/**
 * @description environment variables
 * @author Lin
 */

const ENV = process.env.NODE_ENV;

module.exports = {
  isDev: ENV === 'dev',
  notDev: ENV !== 'dev',
  isProd: ENV === 'production',
  notProd: ENV !== 'production',
};
