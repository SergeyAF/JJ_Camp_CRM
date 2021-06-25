const Router = require('express')
const router = new Router()
const contTypeController = require('../controllers/contTypeController')
const checkRole = require('../middleware/roleMiddleware')

router.get('/', contTypeController.getAll)
router.use(checkRole('ADMIN'))
router.post('/', contTypeController.create)
router.delete('/', contTypeController.delete)

module.exports = router