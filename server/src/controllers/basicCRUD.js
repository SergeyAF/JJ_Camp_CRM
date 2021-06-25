const ApiError = require("../error/ApiError");

//todo: Переделать в errorHandler и CRUD
const deleteFromDB = async (model, id, res, next) =>  {
  try {
    const result = await model.destroy({where: {id}})
    if (result) {
      return res.status(200).json('Record deleted')
    }
    return next(ApiError.badRequest('Record not found'))
  } catch (e) {
    return next(ApiError.badRequest(e))
  }
}
module.exports = deleteFromDB