var express = require("express")
var router = express.Router()
const Functions = require("../Functions/index.js");


// -----------------------------------------------------
// All Routes
// -----------------------------------------------------
router.get("/", Functions.Function1); 
router.get("/anything", Functions.Function2);    
// router.get("/x", Functions.Function2);   
// router.get("/y", Functions.Function2);   
// router.get("/function1", Functions.Function2);   
// router.get("/function2", Functions.Function2);   
// router.get("/function3", Functions.Function2);   
// router.get("/function4", Functions.Function2);   
// router.get("/function5", Functions.Function2);   
// router.get("/function6", Functions.Function2);   

// -----------------------------------------------------
// export
// ----------------------------------------------------- 
module.exports = router
