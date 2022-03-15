const Sequelize = require('sequelize');
 

// 'postgres://user:pass@localhost:5432/db'
const url = 'postgres://william:William@localhost:5432/william-database'; 
const sequelize = new Sequelize(url, {logging: false});
 
//
async function Connect() { 
  try {
    await sequelize.authenticate(); 
    console.log('postgres connected success!');
  } catch (error) {
    console.error('postgres connection Failed!', error);
  }   
} 

//
Connect();

//


//
module.exports = sequelize    