const Router = require('express')
const router = new Router()
const contractorController = require('../controllers/contractorController')

router.get('/', contractorController.getAll)
router.get('/:id', contractorController.getOne)
router.post('/', contractorController.addContractor)
router.put('/:id', contractorController.editContractor)
router.delete('/:id', contractorController.deleteContractor)

module.exports = router