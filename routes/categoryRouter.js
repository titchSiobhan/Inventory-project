const { Router } =require('express');
const categoryRouter = Router();
const categoryController = require('../controllers/categoryController');

categoryRouter.get('/', categoryController.eachCategory);


categoryRouter.post('/management', categoryController.postCategory);

categoryRouter.get('/delete/:id', categoryController.deleteThisCategory)

module.exports = categoryRouter
