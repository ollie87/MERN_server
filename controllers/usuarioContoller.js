const Usuario = require('../models/Usuario');

exports.crearUsuario = async (req, res) => {
  try {
    let usuario;

    // Crea el usuario
    usuario = new Usuario(req.body);
    res.send('Usuario creado correctamente');
    // Guarda el usuario
    await usuario.save();
  } catch (error) {
    console.log(error);
    res.status(400).send('Hubo un error al crear el usuario');
  }
};
