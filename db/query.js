const pool = require('./pool');

async function getAllProducts() {
    const {rows} = await pool.query('SELECT * FROM inventory');
    return rows;
}

async function addProduct(item, description, price, randomNum, quantity, category) {
    await pool.query('INSERT INTO inventory(item, description, price, quantity, product_code, category) VALUES($1, $2, $3, $4, $5, $6 )', [ item, description, price, quantity, randomNum, category])
}


//category
async function getAllCategories() {
   const { rows } = await pool.query('SELECT * FROM category');
   return rows;
}

async function addCategory(category){
    await pool.query('INSERT INTO category(category) VALUES ($1)', [category])
}

async function deleteCategory(id) {
    return pool.query('DELETE FROM category c WHERE c.id =($1)AND NOT EXISTS (SELECT 1 FROM inventory i WHERE i.category = c.category)', [id])
}




async function deleteItem(product_code) {
    await pool.query('DELETE FROM inventory WHERE product_code  = $1', [product_code])
}



//categories

async function displayOneCategory(category) {
   return await pool.query('SELECT * FROM inventory WHERE category = $1', [category])
}


async function searchProducts(search) {
    const query = `
        SELECT *
        FROM inventory
        WHERE item ~* ('\\m' || $1 || '\\M')
           OR description ~* ('\\m' || $1 || '\\M')
           OR category ~* ('\\m' || $1 || '\\M')
           OR product_code ~* ('\\m' || $1 || '\\M')
        ORDER BY item;
    `;
    const values = [search];
    const result = await pool.query(query, values);
    return result.rows;
}

async function singleProduct(product_code) {
    const result = await pool.query('SELECT * FROM inventory WHERE product_code = $1', [product_code])
    return result.rows[0]
}


async function editProduct(item, description, price, quantity, category, product_code) {
   
     return await pool.query('UPDATE inventory SET item = $1, description = $2, price = $3, quantity = $4, category = $5 WHERE product_code = $6', [item, description, price, quantity, category, product_code])
    const values = [item, description, price, quantity, category, product_code];
    
}





module.exports = {
    getAllProducts, addProduct, getAllCategories, addCategory, deleteCategory, deleteItem, displayOneCategory, searchProducts, singleProduct, editProduct
}