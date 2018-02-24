var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazonDB"
  });
connection.connect(function(err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId + "\n");
  });

function managerStartUp (){
    inquirer
    .prompt([
        {
            name: "initial",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View Products for Sale",
                "View Low Inventory",
                "Add to Inventory",
                "Add new Product",
                "Exit"
            ],

        }
    ])
    .then(function(response){
        console.log(response.initial);

        switch(response.initial){
            case "View Products for Sale":
            mgrAllProds();
            return;

            case "View Low Inventory":
            return;
            
            case "Add to Inventory":
            addProd();
            return;

            case "Add new Product":
            return;

            case "Exit":
            console.log("See ya later.  You're a manager.  Go fire someone.");
            end();
            return;
        }
    });
};

function mgrAllProds (){
    console.log("");
    console.log("ITEMS CURRENTLY AVAILABLE ON BAMAZON:")
    console.log("");
    connection.query("SELECT * FROM products", function(err, res){
        if(err) throw(err);
        for (var i=0; i < res.length; i++){
            console.log(  "" +
                        "\nItem ID: " + res[i].item_id +
                        "\nProduct Name: "+ res[i].product_name +
                        "\nPrice: " + res[i].price +
                        "\nNumber available: " + res[i].stock_quantity +
                        "\n------------" +
                        "\n" +
                        "\nSee Items Above^^^^" +
                        "\n");
        }
    managerStartUp();        
    });
};

function end(){
    connection.end();
};
function addProd(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of your item?",
            name: "itemname",
        },
        {
            type: "input",
            message: "Department Name?",
            name: "departmentname",
        },
        {
            type: "input",
            message: "Price?",
            name: "itemprice",
            validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }            
        },
        {
            type: "input",
            message: "How many do you have to sell?",
            name: "itemquantity",
            validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }            
        }                
    ])
    .then(function(response){
        //put code for entering item details here, and write to database
        connection.query(
            "INSERT INTO products SET ?",
            {
                product_name: response.itemname,
                department_name: response.departmentname,
                price: response.itemprice,
                stock_quantity: response.itemquantity
            },
            function(err){
                if (err) throw err;
                console.log("" +
                    "\nYour item was successfully added" +
                    "");
                managerStartUp();

            } 
        );
    });
  
}
managerStartUp();