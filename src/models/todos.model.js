const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Todos = db.define('todos', {
  title: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id'
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'category_id'
  }
},{
  timestamps: false
});

module.exports = Todos;