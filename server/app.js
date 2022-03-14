var path = require("path");
var express = require("express");
var app = express();
const {USER} = require("./DataBase/Model")

// ------------------------------------------------------
// MiddleWares                                  (STEP 1/3)
// ------------------------------------------------------

// (1): to get data in the APIs endpoints
app.use(express.json())
app.use(express.static("server/static"))

// (2): load static files like html, css and scripts(js)
app.use(express.urlencoded({extended: true, limit: '2mb'}));


// ------------------------------------------------------
// Routes                                       (STEP 2/3)
// ------------------------------------------------------

// (1) 
app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname + "/static/index.html"))
});

 
// (2): my first API (RestAPI)
app.post("/api/person", function (req, res) {

    // (1) get data 
    var person = req.body

    // (2) process data (like storing in database)
    console.log(person);

    // (3) send response from server (here)
    res.json("Received successfully!")    

})

// (3)
app.get("/users", async function(req, res){

    var all_users = await USER.findAll({});
    res.json(all_users);

});

// ------------------------------------------------------
// Start Running the Server on port 3000        (STEP 3/3)
// ------------------------------------------------------

// step 3
app.listen(3000);