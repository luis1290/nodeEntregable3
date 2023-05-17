const { Router } = require('express');
const { createTodos, getToDoUsers, updateStatusTodo, deleteTodos, createPivot } = require('../controllers/todos.controllers');
const { createSubcategories } = require('../controllers/subcategories.controllers');

const router = Router();

//crear toDos
router.post('/todos', createTodos);


//completar tarea
router.put('/todos/:userId', updateStatusTodo)

//eliminar tareas
router.delete('/todos/:id', deleteTodos);


module.exports = router;