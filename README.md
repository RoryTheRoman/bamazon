# bamazon

Bamazon is a command line application that uses node.  To run this project, you will need to have node installed on your machine.  Once you have saved the project files locally, and have navigated to the folder in terminal, type npm install into the command line to install the dependencies needed to run the project.

Bamazon is a fictional online marketplace.  The app has two main users:  A customer or a manager.

bamazonCustomer.js:
To run the customer-facing app, type node bamazonCustomer.js.  Immediately, a list of all products available on the marketplace is shown.  
![List Image](https://github.com/RoryTheRoman/bamazon/blob/master/images/productList.png)
After that, the user is prompted to say whether or not they want to buy or sell an item.

By selecting "BUY,"  the user is prompted to select the item of their desire and quantity of their purchase.  If there aren't enough in stock, they are re-prompted.  If bamazon is able to fulfill the order, the quantity in the database decreases.
By selecting “SELL,” the user is prompted to enter the details of the item they’d like to sell, and that info is added to the database table.

bamazonManager.js:
To run the Manager app, type node bamazonManager.js into the command line. Managers are prompted with options to:
“View Products:” returns a list of products available on bamazon.
“View Low Inventory:” returns a list of products in which the stock is less than 5.
“Add to Inventory Numbers::”  UNDER CONSTRUCTION: will allow the manager to add stock to an item already in the database.
“Add New Product:” allows the manager to add a new product to the database.
