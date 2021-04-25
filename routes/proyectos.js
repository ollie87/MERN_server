const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Crea proyectos
// api/proyectos
router.post(
  '/',
  auth,
  [check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()],
  proyectoController.crearProyecto,
);

// Obtener todos los proyectos
router.get('/', auth, proyectoController.obtenerProyectos);

// Actualizar un proyecto vía id
router.put(
  '/:id',
  auth,
  [check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()],
  proyectoController.actulizarProyecto,
);

module.exports = router;
