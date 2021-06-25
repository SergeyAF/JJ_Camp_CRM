const {CampsList} = require('../models/models')
const ApiError = require('../error/ApiError')
const deleteFromDB = require('./basicCRUD')

class CampListController {
  async create(req, res, next) {
    const {name, location, direction} = req.body
    if (!name || !location || !direction) {
      return next(ApiError.badRequest('fields \'name\' \'direction\' and \'location\' are required'))
    }
    try {
      const check = await CampsList.findOne({where: {name}})
      if (check) return next(ApiError.badRequest("Такой лагерь уже существует"))
      const data = await CampsList.create({name, location, direction})
      return res.json(data)
    } catch (e) {
      return next(ApiError.badRequest(e.message))
    }
  }

  async delete(req, res, next) {
      const {id} = req.params
      await deleteFromDB(CampsList,id,res,next)
  }

  async modify(req, res, next) {
    const {id, name, location, direction} = req.body
    if (!id) {
      return next(ApiError.badRequest('field \'id\' is required'))
    }
    try {
      const data = await CampsList.update({name, location, direction}, {where: {id}})
      return res.json(data)
    } catch (e) {
      return next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    const types = await CampsList.findAll({order: [['name', 'ASC']]})
    return res.json(types)
  }
}

module.exports = new CampListController()