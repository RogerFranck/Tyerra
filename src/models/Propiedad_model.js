const { Schema, model } = require("mongoose");

const PropiedadSchema = new Schema({
  Precio: {
    type: Number,
    required: true
  },
  Imagenes: [String],
  Vendedor:{
    type: String,
    required: true,
  },
  Mapa: {
    type: String,
    required: true,
  },
  Estado:{
    type: String,
    required: true,
  },
  Ciudad: {
    type: String,
    required: true
  },
  Colonia: {
    type: String,
    required: true
  },
  Calle: {
    type: String,
    required: true
  },
  NumeroCasa: {
    type: String,
    required: true
  },
  RefereciaDireccion: {
    type: String,
    required: true
  },
  Descripcion: {
    type: String,
    required: true
  },
  Baños: {
    type: Number,
    required: true
  },
  Recamaras: {
    type: Number,
    required: true
  },
  Pisos: {
    type: Number,
    required: true
  },
  Terreno: {
    type: String,
    required: true
  },
  ConstruccionMedida: {
    type: String,
    required: true
  },
  Picina: {
    type: Boolean,
    required: true
  },
  cochera: {
    type: Boolean,
    required: true
  },
  CapacidadCochera: {
    type: Number,
    required: true
  },
  Categoria: {
    type: String,
    required: true,
    default: "Casa"
  }
});

module.exports = model("Propiedad_model", PropiedadSchema);