const Sequelize = require('sequelize');
const sequelize = require('../Connect');
const ROLE = require('./ROLE')

// ARTICLE
const USER = sequelize.define("User", { 
  id: {
    type: Sequelize.INTEGER, 
    primaryKey: true
  },
  name: {type: Sequelize.STRING}
},{
  timestamps: false
});

//
USER.belongsTo(ROLE, {foreignKey: "roleID"})  


//
module.exports = USER
  