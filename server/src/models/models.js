const sequelize = require('../../db')
const {DataTypes} = require("sequelize");

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {
    type: DataTypes.STRING, unique: true, allowNull: false, validate: {
      isEmail: true,
    }
  },
  password: {type: DataTypes.STRING, allowNull: false,},
  role: {type: DataTypes.STRING, defaultValue: 'USER'},
  isDisabled: {type: DataTypes.BOOLEAN, defaultValue: false},

})

const Contractor_type = sequelize.define('contractor_type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  type: {type: DataTypes.STRING, unique: true, allowNull: false}
}, {timestamps: false})

const Contractor = sequelize.define('contractor', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  comments: {type: DataTypes.STRING, allowNull: true},
})

const Contractor_info = sequelize.define('contractor_info', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  gender: {type: DataTypes.STRING, allowNull: false},
  dob: {type: DataTypes.DATEONLY, allowNull: false},
  image: {type: DataTypes.STRING, allowNull: true}
})

Contractor_type.hasMany(Contractor)
Contractor.belongsTo(Contractor_type)

Contractor.hasOne(Contractor_info)
Contractor_info.belongsTo(Contractor)

User.hasMany(Contractor)
Contractor.belongsTo(User)

module.exports = {
  User, Contractor, Contractor_type, Contractor_info
}