const Sequelize = require('sequelize');
const db = require('./database');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'http://www.clker.com/cliparts/e/7/8/b/11954449581778132602Gerald_G_Boy_Face_Cartoon_3.svg.med.png'
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
});

module.exports = Student;