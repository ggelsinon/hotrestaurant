var express = require("express");

var app = express();
var PORT = 3000;

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