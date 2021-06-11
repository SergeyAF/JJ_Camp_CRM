const jwtDecoder = require('../utils/jwtDecoder')

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") next()
  const decoded = jwtDecoder(req, res)
  req.user = decoded
  next()
}