var express = require("express");
var path = require("path");


var app = express();
var PORT = 3000;




// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


  var newCustomer = [{
    customerName = "",
    phoneNumber = "",
    customerEmail = "",
    cusomterID = ""
  }]

  

   app.get("/", function(req, res){
     res.sendFile(path.join(__dirname, "index.html"));
   });

   app.get("/reservations", function(req, res){
     res.sendFile(path.join(__dirname, "reserve.html"));
   });

   app.get("/tables", function( req, res){
     res.sendFile(path.join(__dirname, "tables.html"));
   });


 
app.post("/tables", function(req, res) {

  var newCustomer = req.body;

  newCustomer.routeName = newCustomer.customerID.replace(/\s+/g, "").toLowerCase();

  console.log(newCustomer);

  customers.push(newCustomer);

  res.json(newCustomer);
});