const usuariosCtrl = {};

const usuarioModel = require('../models/usuario_model')
// const jwt = require('jsonwebtoken'); // Pendiente para cuando el usuario se registre
const bcrypt = require('bcryptjs');

usuariosCtrl.getUsers = async (req, res) => {
  const usuarios = await usuarioModel.find()
  res.json(usuarios)
};

usuariosCtrl.createUser = async (req, res) => {
  const { correo, usuario, password, numero } = req.body
  const nuevoUsuario = new usuarioModel({
    correo,
    numero: numero,
    usuario: usuario,
    password: password,
  });
  nuevoUsuario.password = await nuevoUsuario.encryptPassword(password);
  await nuevoUsuario.save();
  res.json({ message: 'Usuario guardado' })
}


usuariosCtrl.getUser = async (req, res) => {
  //req.params.id //recibir el id 
  const usuario = await usuarioModel.findById(req.params.id)
  res.json(usuario)
};

usuariosCtrl.updateUser = async (req, res) => {
  const { correo, usuario, password, certificado, numero } = req.body
  const nuevoUsuario = {
    certificado,
    correo,
    numero: numero,
    usuario: usuario,
    password: password,
  }
  const salt = await bcrypt.genSalt(10);
  nuevoUsuario.password = await bcrypt.hash(password, salt);
  await usuarioModel.findOneAndUpdate({ _id: req.params.id }, nuevoUsuario)
  res.json({ message: "Usuario Actualizado" })
};


usuariosCtrl.deleteUser = async (req, res) => {
  await usuarioModel.findOneAndDelete({ _id: req.params.id })
  res.json({ message: 'Usuario borrado' })
};


module.exports = usuariosCtrl;