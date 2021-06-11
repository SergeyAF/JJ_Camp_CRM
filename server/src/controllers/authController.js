const ApiError = require("../error/ApiError");
const {User} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJWT = (id, email, role) => {
  return jwt.sign(
    {id, email, role},
    process.env.JWT_SECRET_KEY,
    {expiresIn: '12h'})
}

class AuthController {

  async registration(req, res, next) {
    try {
      const {email, password, role} = req.body
      if (!email || !password) {
        return next(ApiError.badRequest('fields \'email\' and \'password\' required'))
      }
      const candidate = await User.findOne({where: {email}})
      if (candidate) {
        return next(ApiError.badRequest('User already exists'))
      }
      const hashPass = await bcrypt.hash(password, 6)
      const user = await User.create({email, password: hashPass, role, isDisabled: false })
      const token = generateJWT(user.id, user.email, user.role, user.isDisabled)

      return res.json({token})
    } catch (e) {
      next(ApiError.internalError(e))
    }
  }

  async login(req, res, next) {
    const {email, password} = req.body
    const user = await User.findOne({where: {email}})
    if (!user) {
      return next(ApiError.badRequest('Wrong email or password'))
    }
    if (user.isDisabled) next(ApiError.badRequest('Account is disabled'))
    const comparePass = bcrypt.compareSync(password, user.password)
    if (!comparePass) {
      return next(ApiError.badRequest('Wrong email or password'))
    }
    const token = generateJWT(user.id, user.email, user.role, user.isDisabled)
    return res.json({token})
  }

  async check(req, res, next) {
    const {id, email, isDisabled, role} = req.user
    const token = generateJWT(id, email, isDisabled, role)
    return res.json({token})
  }
}

module.exports = new AuthController()