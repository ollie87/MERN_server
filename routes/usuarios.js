const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioContoller');
const { check } = require('express-validator');

// Crea un usuario
// api/usuarios
router.post(
  '/',
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser mínimo de 6 caracteres').isLength({ min: 6 }),
  ],
  usuarioController.crearUsuario,
);

module.exports = router;
