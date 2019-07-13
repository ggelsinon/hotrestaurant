var express = require("express");


var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  var customers = [{
    customerName: $("#name").val().trim(),
    phoneNumber: $("#phone").val().trim(),
    customerEmail: $("#email").val().trim(),
    customerID: $("#id").val().trim()

  }
  ];

   $.post("/api/characters", customers)
   .then(function(data) {
     console.log("add.html", data);
     alert("Adding character...");
   });