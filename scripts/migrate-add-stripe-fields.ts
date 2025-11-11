// scripts/migrate-add-stripe-fields.js
const mongoose = require('mongoose');
const { createUserModel } = require('../packages/data-schemas/src/models/user');
const mongodb+srv://info_db_user:DJURZlEOSVVzqJws@cluster0.bm1zura.mongodb.net/?appName=Cluster0 = process.env.mongodb+srv://info_db_user:DJURZlEOSVVzqJws@cluster0.bm1zura.mongodb.net/?appName=Cluster0 || 'mongodb://localhost:27017/LibreChat';

async function migrate() {
  await mongoose.connect(mongodb+srv://info_db_user:DJURZlEOSVVzqJws@cluster0.bm1zura.mongodb.net/?appName=Cluster0, { useNewUrlParser: true, useUnifiedTopology: true });
  const User = createUserModel(mongoose);

  const result = await User.updateMany(
    {},
    {
      $set: {
        stripeCustomerId: null,
        stripeSubscriptionId: null,
        subscriptionStatus: 'none',
        subscriptionPlan: null,
      },
    }
  );

  console.log(`Updated ${result.nModified || result.modifiedCount} users.`);
  await mongoose.disconnect();
}

migrate().catch(err => {
  console.error(err);
  process.exit(1);
});