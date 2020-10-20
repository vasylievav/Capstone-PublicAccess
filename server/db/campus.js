const Sequelize = require('sequelize');
const db = require('./database');

const Campus = db.define('campus',{
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://cdn.regent.edu/app/uploads/2018/09/Divinity-Building-doors.png'
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Campus;

