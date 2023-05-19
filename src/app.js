const express = require('express');
const db = require('./utils/database');
require('dotenv').config();
const initModels = require('./models/initModels');

const userRoutes = require('./routes/users.routes');
const todoRoutes = require('./routes/todos.routes');
const categoryRoutes = require('./routes/categories.routes');
const subcategoryRoutes = require('./routes/subcategories.routes');
const cors = require('cors');

initModels();


const PORT = process.env.PORT || 8000;


db.sync()
  .then(() => console.log('base de datos sincronizada'))
  .catch(err => console.log(err));


const app = express();

app.use(express.json(), cors());

app.get('/', (req, res) => {
  res.send('servidor ok');
});

app.use(userRoutes);
app.use(todoRoutes);
app.use(categoryRoutes);
app.use(subcategoryRoutes);




app.listen(PORT, () => {
  console.log(`servidor escuchando en el puerto definido ${PORT}`);
})