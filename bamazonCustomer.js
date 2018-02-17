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
    console.log("connected as id " + connection.threadId + "\n");
  });

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
  displayProducts();
