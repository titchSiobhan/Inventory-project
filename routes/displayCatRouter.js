const { Router } = require('express')
const displayRouter = Router();
const displayCatController = require('../controllers/displayCatController');



displayRouter.get('/:category', displayCatController.showInOneCategory)
//Cannot GET /shop/category/Furniture
module.exports = displayRouter