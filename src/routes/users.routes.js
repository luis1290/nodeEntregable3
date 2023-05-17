const { Router } = require('express');
const { createUser, getUserToDoCategory } = require('../controllers/users.controllers');

const router = Router();

// crear usuarios
router.post('/users', createUser);

//obtener las tareas de un usuario
router.get('/users/:id', getUserToDoCategory)

module.exports = router;


