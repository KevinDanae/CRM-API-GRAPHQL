const Producto = require("../models/Productos");

// funcion para consultar un producto
const verificarProducto = async (id) => {
  const producto = await Producto.findById(id);
  return producto;
};

const nuevoProducto = async (_, { input }) => {
  try {
    const producto = new Producto(input);

    // almacenar en la base de datos
    const resultado = await producto.save();
    return resultado;
  } catch (error) {
    console.log(error);
  }
};

const obtenerProductos = async () => {
  try {
    const productos = await Producto.find({});
    return productos;
  } catch (error) {
    console.log(error);
  }
};

const obtenerProducto = async (_, { id }) => {
  try {
    const producto = await verificarProducto(id);
    if (producto) return producto;
    throw new Error("Producto no encontrado");
  } catch (error) {
    console.log(error);
    throw new Error("Producto no encontrado");
  }
};

const actualizarProducto = async (_, { id, input }) => {
  let producto = await verificarProducto(id);
  if (!producto) throw new Error("Producto no encontrado");

  // guardarlo en base de datos
  producto = await Producto.findOneAndUpdate({ _id: id }, input, { new: true });
  return producto;
};

const eliminarProducto = async (_, { id }) => {
  let producto = await verificarProducto(id);
  if (!producto) throw new Error("Producto no encontrado");

  // eliminarlo de la base de datos
  await Producto.findOneAndDelete({ _id: id });
  return "Producto eliminado";
};

module.exports = {
  nuevoProducto,
  obtenerProductos,
  obtenerProducto,
  actualizarProducto,
  eliminarProducto,
};
