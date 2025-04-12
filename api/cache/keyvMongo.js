const { KeyvMongo } = require('@keyv/mongo');
const { logger } = require('~/config');

const { mongodb+srv://info_db_user:DJURZlEOSVVzqJws@cluster0.bm1zura.mongodb.net/?appName=Cluster0 } = process.env ?? {};

const keyvMongo = new KeyvMongo(mongodb+srv://info_db_user:DJURZlEOSVVzqJws@cluster0.bm1zura.mongodb.net/?appName=Cluster0, { collection: 'logs' });
keyvMongo.on('error', (err) => logger.error('KeyvMongo connection error:', err));

module.exports = keyvMongo;
