const { Pool } = require('pg');


module.exports = new Pool ({
    host: 'localhost',
    user: 'postgres',
    database: 'product_listings',
    password: 'purple2Elephant!',
    port: 5432,
})