const db = require('../db/query');
const links = require('../data/links')


async function eachCategory(req, res) {
    const categories = await db.getAllCategories();
    res.render('management', { links, categories, error: null})

} 

async function postCategory(req, res) {
    const { category } = req.body;
    await db.addCategory(category);
    return res.redirect('/management');
}


async function deleteThisCategory(req, res) {
    const id = req.params.id;
    const result = await db.deleteCategory(id);
    console.log(result)
    if (result.rowCount === 0) {
       return res.render('management', {
            categories: await db.getAllCategories(),
            links,
            error: 'Cannot delete category, it still contains products!'
        })
    }
    res.redirect('/management');
}


module.exports = {
    eachCategory, postCategory, deleteThisCategory
}