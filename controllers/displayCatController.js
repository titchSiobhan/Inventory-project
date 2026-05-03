const db = require('../db/query');
const links = require('../data/links');

async function displayCategories(req, res) {
    const categories = await db.getAllCategories();
    res.render('category', {links, categories})
}

async function showInOneCategory(req, res) {
    const category = req.params.category;
    const categories = await db.getAllCategories();
    const products = await db.displayOneCategory(category);

   return res.render('category', {links, category, products: products.rows, categories})
}

module.exports = {
   displayCategories, showInOneCategory
}