const {USER} = require("../../DataBase/Model")

//
async function AddUser(req, res) {

    // step (1) get data 
    var user = req.body

    // step (2) person => databse  
    await USER.create({
        id: await USER.max("id", {}) + 1,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        roleID: 2
    });

    // step (3) 
    res.json("User Added Successfully!")    

}

// 
module.exports = AddUser