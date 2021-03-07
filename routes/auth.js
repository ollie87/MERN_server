const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControler');
const { check } = require('express-validator');

// Crea un usuario
// api/usuarios
router.post(
  '/',
  [
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser mínimo de 6 caracteres').isLength({ min: 6 }),
  ],
  authController.autenticarUsuario,
);

module.exports = router;
