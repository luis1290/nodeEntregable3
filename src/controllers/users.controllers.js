const Categories = require("../models/categories.model");
const Subcategories = require("../models/subcategories.model");
const Todos = require("../models/todos.model");
const SubcategoryTodo = require("../models/todosSubcategories.model");
const Users = require("../models/users.model");

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    await Users.create(newUser);
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
}

//obtener todas las tareas de un usuario incluidas sus categorias 
const getUserToDoCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByPk(id, {
      attributes: {
        exclude: ["password"]
      },
      include: [
        {
          model: Todos,
          attributes: ["id", "title", "description", "completed"],
          include: [
            {
              model: Categories,
              attributes: ["id", "name"]
            },
            {
              model: Subcategories
            }
            
          ]
        }
      ]
    });
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
}


module.exports = {
  createUser,
  getUserToDoCategory
}