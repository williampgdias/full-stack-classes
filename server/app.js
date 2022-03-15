var express = require("express");
var app = express();

// ------------------------------------------------------
// (STEP 1/3) MiddleWares                                  
// ------------------------------------------------------ 
app.use(express.json()); 
app.use(express.urlencoded({extended: true, limit: '2mb'})); 
app.use(express.static("server/static"));

// ------------------------------------------------------
// (STEP 2/3) Routes                                       
// ------------------------------------------------------ 
app.use(require("./Routes")); 

// ------------------------------------------------------
// (STEP 3/3) Start the Server on port 3000        
// ------------------------------------------------------
app.listen(3000);