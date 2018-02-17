DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;


CREATE TABLE products(
	item_id INT NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    department_name VARCHAR(20) NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INTEGER (10),
    PRIMARY KEY (item_id)
);
