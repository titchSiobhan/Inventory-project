const db = require('../db/query');
const links = require('../data/links');

// async function getProducts(req, res) {
// 	const search = req.query.search;
// 	const products = await db.getAllProducts();
// 	res.render('shop', {
// 		links: links,
// 		products: products,
// 		search,
// 	});
// }

// async function getShopProducts(req, res) {
// 	const search = req.query.search;
// 	let products;
// 	if (search) {
// 		products = await db.searchProducts(search)
// 	} else {
// 		products = await db.getAllProducts();
// 	}
	
// 	res.render('shop', {
// 		links: links,
// 		products: products,
// 		search
// 	});
// }

async function searchResults(req, res) {
    const search = req.query.search?.trim() || "";

    let products;

    if (search.length > 0) {
        products = await db.searchProducts(search);
    } else {
		products = await db.getAllProducts()
	}

    res.render("shop", {
        links,
        products,
        search
    });
}



async function postProduct(req, res) {
   const { item, description, price, quantity, category } = req.body;
	const randomNum = function (length = 11) {
		return Math.random().toString(36).substring(2, length + 2);

	};


	await db.addProduct(item, description, price, randomNum(), quantity, category);
  return res.redirect('/management')
}

async function handlePostProduct(req, res) {

	return res.redirect('/management');
}

async function deleteThisItem(req, res) {
	const product_code = req.params.product_code;
	await db.deleteItem(product_code);
	res.redirect('/shop');
}

module.exports = {
	//  getProducts,
	// getShopProducts,
	postProduct,
	handlePostProduct,
	deleteThisItem, searchResults
};
