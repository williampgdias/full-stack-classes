var express = require("express")
var router = express.Router()
const Controller = require("../Controllers");


// -----------------------------------------------------
// All Routes
// -----------------------------------------------------
router.get("/", Controller.Home); 
router.post("/api/person", Controller.ReadUser); 
router.get("/users", Controller.AddUser);

// -----------------------------------------------------
// export
// ----------------------------------------------------- 
module.exports = router
