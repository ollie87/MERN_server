const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControler');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

// Crea un usuario
// api/usuarios
router.post('/', authController.autenticarUsuario);

router.get('/', auth, authController.usuarioAutenticado);

module.exports = router;
