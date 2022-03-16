var express = require("express")
var router = express.Router() 


// -----------------------------------------------------
// All Routes
// -----------------------------------------------------

// Route (1)
router.get("/", function(request, response){
    response.send("<h1> Hello World from Route (1) </h1>")
}); 

// Route (2)
router.get("/anything", function(request, response){
    response.send("<h1> Hello World from Route (2) </h1>")
});       

// -----------------------------------------------------
// export
// ----------------------------------------------------- 
module.exports = router
