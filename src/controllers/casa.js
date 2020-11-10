const PropiedadCTR = {}
const Propiedad_model = require("../models/Propiedad_model");

PropiedadCTR.getPropiedad = async (req, res) => {
  const producto = await Propiedad_model.find()
  res.json(producto)
}

PropiedadCTR.postPropiedad = async (req, res) => {
  const { 
    Precio, Vendedor, Mapa, 
    Estado, Ciudad, Descripcion,
    Categoria , Imagenes, Baños,
    Recamaras, Pisos, Terreno,
    ConstruccionMedida, Picina, cochera,
    CapacidadCochera, Colonia, Calle,
    NumeroCasa, RefereciaDireccion 
  } = req.body;
  const newProducto = new Propiedad_model({
    Precio, 
    Vendedor, 
    Mapa, 
    Estado, 
    Ciudad, 
    Descripcion,
    Categoria,
    Imagenes,
    Baños,
    Recamaras,
    Pisos, 
    Terreno,
    ConstruccionMedida, 
    Picina, 
    cochera,
    CapacidadCochera,
    Colonia, 
    Calle,
    NumeroCasa, 
    RefereciaDireccion, 
  });

  await newProducto.save()

  res.json({ message: "Producto agregado" })
}

PropiedadCTR.gePropiedad = async (req, res) => {
  const producto = await Propiedad_model.findById(req.params.id)
  res.json(producto)
}

PropiedadCTR.updatePropiedad = async (req, res) => {
  const { 
    Precio, Vendedor, Mapa, 
    Estado, Ciudad, Descripcion,
    Categoria , Imagenes, Baños,
    Recamaras, Pisos, Terreno,
    ConstruccionMedida, Picina, cochera,
    CapacidadCochera, Colonia, Calle,
    NumeroCasa, RefereciaDireccion 
  } = req.body;
  const newProducto = {
    Precio, 
    Vendedor, 
    Mapa, 
    Estado, 
    Ciudad, 
    Descripcion,
    Categoria,
    Imagenes,
    Baños,
    Recamaras,
    Pisos, 
    Terreno,
    ConstruccionMedida, 
    Picina, 
    cochera,
    CapacidadCochera,
    Colonia, 
    Calle,
    NumeroCasa, 
    RefereciaDireccion, 
  };

  await Propiedad_model.findOneAndUpdate({ _id: req.params.id }, newProducto)

  res.json({ message: "Propiedad actualizado" })

}

PropiedadCTR.deletePropiedad = async (req, res) => {
  await Propiedad_model.findOneAndDelete({ _id: req.params.id })
  res.json({ message: "Propiedad eliminada" })
}

module.exports = PropiedadCTR;