const {Contractor_type} = require('../models/models')
const ApiError = require('../error/ApiError')

class ContTypeController {
  async create(req, res, next) {
    const {type} = req.body
    if (!type) {
      return next(ApiError.badRequest('field \'type\' required'))
    }
    const data = await Contractor_type.create({type})
    return res.json(data)
  }

  async getAll(req, res) {
    const types = await Contractor_type.findAll()
    return res.json(types)
  }
}

module.exports = new ContTypeController()