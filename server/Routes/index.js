var express = require("express")
var router = express.Router() 



// -----------------------------------------------------
// Functions
// -----------------------------------------------------
function Function1(request, response){
    response.send("<h1> Hello World from Route (1) </h1>")
}

function Function2(request, response){
    response.send("<h1> Hello World from Route (2) </h1>")
}


// -----------------------------------------------------
// All Routes
// -----------------------------------------------------

// Route (1)
router.get("/", Function1); 

// Route (2)
router.get("/anything", Function2);       

// -----------------------------------------------------
// export
// ----------------------------------------------------- 
module.exports = router
