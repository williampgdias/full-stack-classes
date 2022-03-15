
const {USER} = require("../../DataBase/Model")


//
async function ReadUser(req, res){

    var all_users = await USER.findAll({});
    res.json(all_users);

}


// 
module.exports = ReadUser