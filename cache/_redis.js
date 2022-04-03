/**
 * @description connect redis
 * @author Lin
 */
const debug = require('debug')('redis');

const { createClient } = require('redis');
const { redisConfig } = require('../config/dbConfig');

// create redis connection
const createRedisClient = async () => {
  const client = createClient(redisConfig.host, redisConfig.port);
  client.on('error', (err) => {
    debug(err);
  });
  await client.connect();
  return client;
};

const client = createRedisClient();
/**
 * redis set
 * @param {string} key
 * @param {string} val
 * @param {number} timeout expire time unit: second
 */
const set = async (key, val, timeout = 60 * 60) => {
  let valString = val;
  if (typeof val === 'object') {
    valString = JSON.stringify(valString);
  }
  await client.set(key, valString);
  await client.expire(key, timeout);
};

/**
 * redis get
 * @param {string} key
 */
const get = async (key) => {
  let value = '';
  try {
    value = await client.get(key);
  } catch (err) {
    // ClosedClient Error
  }
  return value;
};
module.exports = {
  set,
  get,
};
