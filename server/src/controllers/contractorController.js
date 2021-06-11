const ApiError = require("../error/ApiError");
const {Sequelize} = require("sequelize");
const {Contractor, Contractor_type, Contractor_info} = require('../models/models')

class ContractorController {

  async getAll(req, res, next) {
    let {limit, page} = req.body
    limit = limit || 10
    page = page || 1
    const offset = page * limit - limit
    try {
      const {count, rows} = await Contractor.findAndCountAll({
        limit, offset,
        include: [
          {model: Contractor_type, attributes: [], required: false},
          {model: Contractor_info, attributes: [], required: false},
        ],
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
          include: [
            [Sequelize.col("type"), "contractorTypeId"],
            [Sequelize.col("gender"), "gender"],
            [Sequelize.col("dob"), "dob"],
            [Sequelize.col("image"), "image"],
          ]
        }
      })
      return res.json({total: count, offset, limit, data: rows})
    } catch (e) {
      return next(ApiError('some DB error'))
    }
  }

  async addContractor(req, res, next) {
    try {
      const {name, type, comments, info} = req.body
      if (!name || !type) {
        return next(ApiError.badRequest('field \'name\' and \'type\' required'))
      }
      const candidate = await Contractor.findOne({where: {name}})
      if (candidate) {
        return next(ApiError.badRequest('Contractor has already existed'))
      }
      const getType = await Contractor_type.findOne({where:{type}})
      const newContractor = await Contractor.create({name, contractorTypeId: getType.id, comments})
      let infoData;
      if (info) {
        const {gender, dob, image} = info
        infoData = await Contractor_info.create({gender, dob, image, contractorId: newContractor.id})
      }
      return res.json({...newContractor.dataValues, infoData})
    } catch (e) {
      next(ApiError.badRequest(e))
    }
  }

  async getOne(req, res) {
    const {id} = req.params
    const contractor = await Contractor.findOne({where: {id}})
    return res.json(contractor)
  }

  async editContractor(req, res) {

  }

  async deleteContractor(req, res, next) {
    try {
      const {id} = req.params
      const result = await Contractor.destroy({where:{id}})
      if (result) {
        return res.status(200).json('Record deleted')
      }
      return next(ApiError.badRequest('Record not found'))
    } catch (e) {
      return next(ApiError.badRequest(e))
    }

  }
}

module.exports = new ContractorController()