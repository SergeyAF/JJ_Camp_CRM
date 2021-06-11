const jwt = require('jsonwebtoken')

const notAuthorizedError = (res) => {
  return res.status(401).json({message: "Not authorized"})
}
module.exports = function (req, res) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) notAuthorizedError(res)
    return jwt.verify(token, process.env.JWT_SECRET_KEY)
  } catch (e) {
    notAuthorizedError(res)
  }
}