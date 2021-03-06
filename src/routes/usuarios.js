const { Router } = require('express')
const router = Router();

const { getUsers, createUser, getUser, updateUser, deleteUser, updateUserUnPassword } = require('../controllers/usuarios')

router.route('/')
  .get(getUsers)
  .post(createUser)

router.route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser)

router.route('/Certificado/:id')
  .put(updateUserUnPassword)

module.exports = router;