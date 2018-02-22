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
  function displayProducts (){
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
                            "\n------------")
          }
        //   console.log(res);
          buyOrSell();
      });
  }
function buyOrSell(){
    inquirer
        .prompt([
            {
                name: "buyorsell",
                type: "list",
                message: "Would you like to Buy or Sell an item?",
                choices: ["BUY", "SELL"]
            },

        ])
        .then(function(res){
             if(res.buyorsell === "BUY"){
                 console.log("It worked");
                 buyItem();


             }
             if(res.buyorsell === "SELL"){    
                console.log("this also worked.")
                 sellItem();

             }
        });
};
function sellItem(){
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
        },
        {
            type: "input",
            message: "How many do you have to sell?",
            name: "itemquantity",
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
                console.log("Go make them fat stacks.  Your item was added")
            }
        );
    });
}
function buyItem (){
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        // console.log(results) shows that i'm getting results.;
        inquirer
        .prompt([
            {
                type: "input",
                name: "itemtobuy",
                message: "What is the name of the item you would like to buy?",
            },
            {
                type: "input",
                name: "howmany",
                message: "How many would you like to purchase?"
                // validate: function(value){
                //     if(isNaN(value) ===  false){
                //         return true;
                //     }
                //     return false;
                // }
                //commented out, didn't like 'validate' as a thing in inquierer
            }
        ])
        .then(function(answer){
            var chosenItem;
            for (var i = 0; i < results.length; i ++){
                if (results[i].item_name === answer.itemtobuy){
                    chosenItem = results[i];
                    console.log(chosenItem);
                }
            }
            if(parseInt(chosenItem.stock_quantity) > parseInt(answer.howmany)){
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: stock_quantity - answer.howmany
                        },
                        {
                            item_id: chosenItem.item_id
                        }
                    ],
                    function(error){
                        if (error) throw error;
                        console.log("Congrats!  You are the proud owner of " + answer.howmany + " " + chosenItem + ".");
                    }
                );
            }else{
                console.log("I'm sorry, there aren't enough of those to buy. Try again!")
                buyOrSell();
            }
        });
    });    
}

displayProducts();