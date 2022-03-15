var express = require("express")
var router = express.Router()
const Controller = require("../Controllers");


// -----------------------------------------------------
// All Routes
// -----------------------------------------------------
router.get("/", Controller.Home); 
router.post("/api/person", Controller.AddUser); 
router.get("/users", Controller.ReadUser);

// -----------------------------------------------------
// export
// ----------------------------------------------------- 
module.exports = router
