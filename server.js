const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//array to hold table info

// let friends = [
//     {
//         id: "afhaque89",
//         name: "Ahmed",
//         email: "ahmed@example.com",
//         phone: "000-000-0000"
//     },
//     {
//         id: "saimaCool",
//         name: "Saima",
//         email: "saima@example.com",
//         phone: "000-000-0000"
//     }
// ];

let friendList = []


 //routes to pages

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
  


//create new tables

app.post("/api/friends", function(req, res) {
    let newFriends = req.body;
    
    console.log(newFriends);
    if (tables.length < 5) {
        tables.push(newFriends);
        res.send(true);

    }  else{
        friendList.push(newFriends);
        res.send(false);
    }

  
  });
  
//display all for API LINK

app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  