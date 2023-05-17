const { Router } = require('express');
const { createSubcategories } = require('../controllers/subcategories.controllers');

const router = Router();

// agregar subcategoria

router.post('/subcategories', createSubcategories);

//agregar en tabla pibote subcategorias y todos


module.exports = router;

