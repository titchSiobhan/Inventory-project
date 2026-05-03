const db = require('../db/query');
const links = require('../data/links');
const { search } = require('../routes/dbRoute');

async function displayCategories(req, res) {
  
    const categories = await db.getAllCategories();
    res.render('index', {links, categories})
}



module.exports = {
    displayCategories
}