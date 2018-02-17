DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;


CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(20) NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INTEGER (10),
    PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Obama Mug", "Housewares", 10.00, 5),
        ("Hope Poster", "Decor", 30.00, 10),
        ("Signed James Hong photo as David Lo Pan", "Collectibles", 35.00, 1),
        ("Album - Rabbit Fur Coat by Jenny Lewis and the Watson Twins - 180 gram", "Music-Vinyl", 50.00, 1),
        ("Vintage 80's Ski Jacket, Size Men's Medium", "Clothing", 45.00, 1),
        ("Natural Edge Wood Coffee Table", "Furniture", 400.00, 1),
        ("Authentic Herman Miller Eames Chair", "Furniture", 4000, 2),
        ("Garbage Pail Kids Cards - Set of 10 - random, not in package", "Collectibles", 3.00, 15),
        ("REO Speedwagon T-shirt, Size Men's Medium", "Clothing", 0.50, 1),
        ("Vintage Bubble Letter City Postcards", "Collectibles", 5.00, 4000);