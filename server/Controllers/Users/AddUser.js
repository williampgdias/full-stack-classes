
const {USER} = require("../../DataBase/Model")


//
async function AddUser(req, res){

    var all_users = await USER.findAll({});
    res.json(all_users);

}


// 
module.exports = AddUser