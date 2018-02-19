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
  startUp();
  function displayProducts (){
      console.log("");
      console.log("ITEMS CURRENTLY AVAILABLE ON BAMAZON:")
      console.log("");
      connection.query("SELECT * FROM products", function(err, res){
          if(err) throw(err);
          console.log(res);
          connection.end(); //change this later to start the initial function to ask if buy or post.
      });

  }

function startUp (){
    console.log("");
    console.log("Welcome to BAMAZON!  Here's a list of items available to purchase: ")
    displayProducts();
    buyOrSell();
};

function buyOrSell(){
    inquirer
        .prompt([
            {
                name: "buyorsell",
                type: "checkbox",
                message: "Would you like to Buy or Sell an item?",
                choices: ["Buy an Item", "Sell an Item"]
            },

        ])
        .then(function(res){
             if(res.buyorsell === "Buy an Item"){
                 console.log("It worked");
                 return
             }else{
                 console.log("this also worked.")
                 return
             }
        });
};
