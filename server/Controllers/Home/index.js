var path = require("path");


//
function Home(req, res){
    res.sendFile(path.resolve(__dirname + "/static/index.html"))
}


// 
module.exports = Home