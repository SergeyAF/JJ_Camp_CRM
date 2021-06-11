const jwtDecoder = require('../utils/jwtDecoder')

module.exports = function (role) {
  return function (req, res, next) {
    const decoded = jwtDecoder(req, res)
    if (decoded.role !== role) res.status(403).json({message: "No permission"})
    req.user = decoded
    next()
  }
}