require('dotenv').config();
const mongoose = require('mongoose');
const mongodb+srv://info_db_user:DJURZlEOSVVzqJws@cluster0.bm1zura.mongodb.net/?appName=Cluster0 = process.env.mongodb+srv://info_db_user:DJURZlEOSVVzqJws@cluster0.bm1zura.mongodb.net/?appName=Cluster0;

if (!mongodb+srv://info_db_user:DJURZlEOSVVzqJws@cluster0.bm1zura.mongodb.net/?appName=Cluster0) {
  throw new Error('Please define the mongodb+srv://info_db_user:DJURZlEOSVVzqJws@cluster0.bm1zura.mongodb.net/?appName=Cluster0 environment variable');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDb() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      // bufferMaxEntries: 0,
      // useFindAndModify: true,
      // useCreateIndex: true
    };

    mongoose.set('strictQuery', true);
    cached.promise = mongoose.connect(mongodb+srv://info_db_user:DJURZlEOSVVzqJws@cluster0.bm1zura.mongodb.net/?appName=Cluster0, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = connectDb;
