const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.get('/', userController.getAll)
router.get('/:id', userController.getOne)
router.post('/', userController.addUser)
router.put('/:id', userController.editUser)
router.delete('/:id', userController.deleteUser)

module.exports = router