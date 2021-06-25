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

//---------- Camps and Shifts  ----

const CampsList = sequelize.define('camps_list', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  direction: {type: DataTypes.STRING, allowNull: false},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  location: {type: DataTypes.STRING, allowNull: false}
}, {timestamps: false})

const CampsShift = sequelize.define('camps_shifts', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  maxCount: {type: DataTypes.INTEGER, allowNull: false},
  startDate: {type: DataTypes.DATEONLY, allowNull: false},
  endDate: {type: DataTypes.DATEONLY, allowNull: false},
  defaultPrice: {type: DataTypes.INTEGER, allowNull: false},
  campsList_id: {type: DataTypes.INTEGER, references: {model: CampsList, key: 'id'}}
})

CampsList.hasMany(CampsShift, {foreignKey: 'campsList_id'})
CampsShift.belongsTo(CampsList, {foreignKey: 'campsList_id'})

//-----   Contracts -----

const Contract = sequelize.define('contracts', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  contractValue: {type: DataTypes.INTEGER, allowNull: false},
  shift_id: {type: DataTypes.INTEGER, references: {model: CampsShift, key: 'id'}},
  contractor_id: {type: DataTypes.INTEGER, references: {model: Contractor, key: 'id'}},
  author_id: {type: DataTypes.INTEGER, references: {model: User, key: 'id'}}
})

CampsShift.hasMany(Contract, {foreignKey: 'shift_id'})
Contract.belongsTo(CampsShift, {foreignKey: 'shift_id'})
Contractor.hasMany(Contract, {foreignKey: 'contractor_id'})
Contract.belongsTo(Contractor, {foreignKey: 'contractor_id'})
User.hasMany(Contract, {foreignKey: 'author_id'})
Contract.belongsTo(User, {foreignKey: 'author_id'})

//----- CashBox ---

const CashBox = sequelize.define('cashBox', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  summary: {type: DataTypes.INTEGER, defaultValue: 0}
})

module.exports = {
  User,
  Contractor, Contractor_type, Contractor_info,
  CampsList, CampsShift,
  Contract,
  CashBox
}