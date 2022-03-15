const Sequelize = require('sequelize');
const sequelize = require('../Connect'); 

// ARTICLE
const ROLE = sequelize.define("Role", { 
  id: {
    type: Sequelize.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  }, 
  roleTitle: {type: Sequelize.STRING}
},{
  timestamps: false
});
   


//
module.exports = ROLE
  