const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioContoller');

// Crea un usuario
// api/usuarios
router.post('/', usuarioController.crearUsuario);

module.exports = router;
