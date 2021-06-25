const Router = require('express')
const router = new Router()
const campListController = require('../controllers/campListController')
const checkRole = require('../middleware/roleMiddleware')

router.get('/', campListController.getAll)
router.use(checkRole('ADMIN'))
router.post('/',campListController.create)
router.put('/:id',campListController.modify)
router.delete('/:id',campListController.delete)

module.exports = router