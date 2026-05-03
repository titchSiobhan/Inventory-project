const { Router } = require('express');
const singleRouter = Router();
const singleController = require('../controllers/singleController');



singleRouter.get('/shop/:product_code', singleController.openSingleProduct);


singleRouter.get('/shop/:product_code/edit', singleController.showEditForm);


singleRouter.post('/shop/:product_code/edit', singleController.editThisProduct);




module.exports = singleRouter