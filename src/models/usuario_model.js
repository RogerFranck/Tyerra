const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const usuarioSchema = new Schema({
  usuario: {
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true,
  },
  numero: {
    type: String,
    required: true,
  },
  certificado: {
    type: Boolean,
    default: false,
  },
})

usuarioSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

usuarioSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = model('usuarioModel', usuarioSchema)