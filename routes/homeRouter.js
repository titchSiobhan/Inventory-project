const { Router } = require('express');
const homeRouter = Router();
const homeController = require('../controllers/homeController');

homeRouter.get('/', homeController.displayCategories);


//Cannot GET /shop/category/Furniture
module.exports = homeRouter