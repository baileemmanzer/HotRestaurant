var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
        name: "Test",
        phoneNumber: "123",
        email: "test@test.com",
        id: "please work"
    }
]

var waitList = [];

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

app.get("/api/waitList", function(req, res) {
    return res.json(reservations);
});

if (reservations.length < 5) {
app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newreservation = req.body;
  
    console.log(newreservation);
  
    // We then add the json the user sent to the character array
    reservations.push(newreservation);
  
    // We then display the JSON to the users
    res.json(newreservation);
  });
}
else if (reservations.length > 5) {
    app.post("/api/waitList", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newreservation = req.body;
      
        console.log(newreservation);
      
        // We then add the json the user sent to the character array
        waitList.push(newreservation);
      
        // We then display the JSON to the users
        res.json(newreservation);
      });
}




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log(__dirname)
  });