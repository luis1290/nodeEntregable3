// importacion de modeles
const Categories = require("./categories.model");
const Subcategories = require("./subcategories.model");
const Todos = require("./todos.model");
const Users = require("./users.model");

const initModels = () => {

  //INICIO relacion users y todos
  {
    //una tarea es de un usuario
    Todos.belongsTo(Users, { foreignKey: "userId" });
    // un usuario tiene muchas tareas
    Users.hasMany(Todos, { foreignKey: "userId" });
  }
  //FIN relacion users y todos

  //  INICIO relacion categories con todos
  {
    //una tarea le pertenece a una categoria
    Todos.belongsTo(Categories, { foreignKey: "categoryId" });
    //Una categoria puede pertenecer a muchas tareas
    Categories.hasMany(Todos, { foreignKey: "categoryId" });
  }
  // FIN relacion categories con todos

  //INICIO relacion con tabla pibote subcategoria
  {
    //una tarea pueda tener una o mas subcategorias 
    Todos.belongsToMany(Subcategories, { through: "todos_subcategories", foreignKey: "todoId", otherKey: "subcategoryId", timestamps: false });
    //una subcategoria pertenezca a una o más tareas 
    Subcategories.belongsToMany(Todos, { through: "todos_subcategories", foreignKey: "subcategoryId", otherKey: "todoId" });
  }
  //FIN relacion con tabla pibote subcategoria
}

module.exports = initModels;