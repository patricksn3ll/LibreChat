// api/server/routes/stripe.js
const express = require('express');
const { subscribeController, subscriptionStatusController, productPurchaseController, getProductsByMetadataController } = require('~/server/controllers/StripeController');
const { requireJwtAuth } = require('~/server/middleware');
const { billingPortalController } = require('~/server/controllers/StripeController');

const router = express.Router();


// One-time product purchase

// Fetch Stripe products by metadata key/value
router.get('/products/by-metadata', requireJwtAuth, getProductsByMetadataController);

// One-time product purchase
router.post('/purchase', requireJwtAuth, productPurchaseController);

router.post('/subscribe', requireJwtAuth, subscribeController);
router.get('/status', requireJwtAuth, subscriptionStatusController);
router.post('/billing-portal', requireJwtAuth, billingPortalController);

module.exports = router;
