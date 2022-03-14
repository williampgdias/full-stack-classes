var path = require("path");
var express = require("express");
var app = express();

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

// (1): it is not API endpoint, it is just a simple route
app.get("/", function(req, res){
 
    var my = path.resolve(__dirname + "/static/index.html")
    // console.log(my);
    res.sendFile(my)

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


// ------------------------------------------------------
// Start Running the Server on port 3000        (STEP 3/3)
// ------------------------------------------------------

// step 3
app.listen(3000);