const Router = require('express')
const router = new Router()
const authRouter = require('./authRouter')
const userRouter = require('./userRouter')
const contractorRouter = require('./contractorRouter')
const contractorTypeRouter = require('./contTypeRouter')
const campListRouter = require('./campsListRouter')

const authMiddlevare = require('../middleware/authMiddleware')

router.use('/auth', authRouter)
// router.use(authMiddlevare)
router.use('/user', userRouter)
router.use('/contractor', contractorRouter)
router.use('/contr_type', contractorTypeRouter)
// router.use('/shift')
router.use('/camp_list', campListRouter)

module.exports = router