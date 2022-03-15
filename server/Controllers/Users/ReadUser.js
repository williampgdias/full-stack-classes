
const {USER} = require("../../DataBase/Model")

//
async function ReadUser(req, res) {

    // step (1) get data 
    var user = req.body

    // step (2) person => databse  
    await USER.create({
        id: await USER.max("id", {}) + 1,
        name: user.name,
        roleID: 1
    });

    // step (3) send response from here (server) to frontend 
    res.json("Received successfully!")    

}


// 
module.exports = ReadUser