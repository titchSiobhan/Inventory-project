const db = require('../db/query');
const links = require('../data/links')

async function openSingleProduct(req, res) {
    const product_code = req.params.product_code;
    const product = await db.singleProduct(product_code);
    res.render('singleProduct', {links, product, product_code})
}
async function showEditForm(req, res) {
const product_code = req.params.product_code;
const product = await db.singleProduct(product_code);
const categories = await db.getAllCategories(); 

res.render('edit', {
    links, product, categories
})
}


async function editThisProduct(req, res) {
    const {item, description, price, quantity, category, product_code} =req.body;
    await db.editProduct(item, description, price, quantity, category, product_code);
    return res.redirect(`/shop/${product_code}`);

}

module.exports = {
    openSingleProduct, editThisProduct, showEditForm
}