const { Router } = require('express');
const dbRouter = Router();
const dbController = require('../controllers/dbController');

dbRouter.get('/', dbController.searchResults);

// dbRouter.get('/shop', dbController.getShopProducts);
dbRouter.get('/shop', dbController.searchResults)

// dbRouter.get('/management', dbController.handlePostProduct)

dbRouter.post('/add', dbController.postProduct)

dbRouter.get('/delete/:product_code', dbController.deleteThisItem)

module.exports = dbRouter