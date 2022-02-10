const nuevoUsuario = require("../helpers/nuevoUsuario");
const {
  nuevoProducto,
  obtenerProductos,
  obtenerProducto,
  actualizarProducto,
  eliminarProducto,
} = require("../helpers/productos");

const {
  autenticarUsuario,
  obtenerUsuario,
} = require("../helpers/auntenticarUsuario");

const resolvers = {
  Query: {
    obtenerUsuario,
    obtenerProductos,
    obtenerProducto,
  },
  Mutation: {
    nuevoUsuario,
    autenticarUsuario,
    nuevoProducto,
    actualizarProducto,
    eliminarProducto,
  },
};

module.exports = resolvers;
