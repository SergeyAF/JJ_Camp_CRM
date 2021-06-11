const Router = require('express')
const router = new Router()
const contTypeController = require('../controllers/contTypeController')
const checkRole = require('../middleware/roleMiddleware')

router.get('/', contTypeController.getAll)
router.post('/', checkRole('ADMIN'), contTypeController.create)

module.exports = router