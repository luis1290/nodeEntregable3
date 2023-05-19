const Subcategories = require("../models/subcategories.model");
const Todos = require("../models/todos.model");
const SubcategoryTodo = require("../models/todosSubcategories.model");



//create toDos  , createSubcategories, createPivot
const createTodos = async (req, res) => {
  try {
    const { title, description, userId, categoryId, idSubcategory } = req.body;

    const todo = await Todos.create({ title, description, userId, categoryId });
    const subcategorySearch = await Subcategories.findByPk(idSubcategory);

    await SubcategoryTodo.findOrCreate({
      where: { todoId: todo.id, subcategoryId: subcategorySearch.id }
    });

    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
}




//actualizar estatus de la tarea

const updateStatusTodo = async (req, res) => {
  try {
    const { userId } = req.params;
    const { id, completed } = req.body;
    await Todos.update({ id, completed }, {
      where: { id, userId }
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
}

//eliminar tareas
const deleteTodos = async (req, res) => {
  try {
    const { id } = req.params;
    await Todos.destroy({
      where: { id }
    });
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = { createTodos, updateStatusTodo, deleteTodos }