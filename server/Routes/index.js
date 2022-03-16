var express = require("express")
var router = express.Router()
const {Home, AddUser, ReadUser} = require("../Controllers");


// -----------------------------------------------------
// All Routes
// -----------------------------------------------------
router.get("/", Home); 
router.post("/api/person", AddUser); 
router.get("/users", ReadUser);

// -----------------------------------------------------
// export
// ----------------------------------------------------- 
module.exports = router
