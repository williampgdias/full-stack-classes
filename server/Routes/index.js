var express = require("express")
var router = express.Router() 


// -----------------------------------------------------
// Functions
// -----------------------------------------------------
var Functions = require("../Functions/index.js")
var Function1 = Functions.Function1
var Function2 = Functions.Function2

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
