const { Client } = require('pg');

const randomNum = function (length = 11) {
  return Math.random().toString(36).substring(2, length + 2);
};

const SQL = `
CREATE TABLE IF NOT EXISTS inventory (
  id SERIAL PRIMARY KEY,
  item VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price DEC(6,2) NOT NULL,
  quantity INT NOT NULL,
  category VARCHAR(255) NOT NULL,
  product_code VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS category (
  id SERIAL,
  category VARCHAR(255) PRIMARY KEY UNIQUE
);

INSERT INTO inventory (item, description, price, quantity, category, product_code)
VALUES
('Dog Coat – Small', 'Warm waterproof coat for small dogs', 19.99, 5, 'Clothes', '${randomNum()}'),
('Dog Coat – Large', 'Insulated coat for large dogs', 24.99, 3, 'Clothes', '${randomNum()}'),
('Cat Tree Deluxe', 'Multi‑level cat climbing tower', 89.99, 2, 'Furniture', '${randomNum()}'),
('Cat Wet Food – Tuna', '12‑pack premium tuna wet food', 12.50, 20, 'Food', '${randomNum()}'),
('Cat Litter 10kg', 'Clumping odour‑control litter', 8.99, 15, 'Toileting', '${randomNum()}'),
('Hamster Wheel', 'Silent running wheel for hamsters', 14.99, 7, 'Accessories', '${randomNum()}'),
('Bird Seed Mix 2kg', 'Nutrient‑rich seed blend for small birds', 6.49, 12, 'Food', '${randomNum()}'),
('Rabbit Hay Bale', 'Timothy hay bale for rabbits', 5.99, 10, 'Food', '${randomNum()}'),
('Dog Chew Toy', 'Durable rubber chew toy', 7.99, 18, 'Toy', '${randomNum()}'),
('Fish Flakes 200g', 'High‑protein tropical fish food', 4.99, 25, 'Food', '${randomNum()}');

INSERT INTO category (category)
VALUES ('Clothes'),
('Furniture'),
('Food'),
('Toy'),
('Accessories');
`;

async function main() {
  console.log('seeding....');
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

if (require.main === module) {
  main();
}