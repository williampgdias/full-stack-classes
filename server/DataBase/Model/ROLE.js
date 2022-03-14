const Sequelize = require('sequelize');
const sequelize = require('../Connect'); 

// ARTICLE
const ROLE = sequelize.define("Role", { 
  id: {
    type: Sequelize.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  }, 
  title: {type: Sequelize.STRING}
},{
  timestamps: false
});
   


//
module.exports = ROLE
  