require("dotenv").config({ path: ".env" });
const jwt = require("jsonwebtoken");
const Usuarios = require("../models/usuarios");
const { comparePassword } = require("./hashPasword");

const crearToken = (user, secret, expiresIn) => {
  const { id, email, nombre, apellido } = user;
  return jwt.sign({ id, email, nombre, apellido }, secret, { expiresIn });
};

const autenticarUsuario = async (_, { input }) => {
  const { email, password } = input;

  // revisar si el usuario existe
  const existeUsuario = await Usuarios.findOne({ email });
  if (!existeUsuario) {
    throw new Error("El usuario no existe");
  }

  // revisar si el password es correcto
  const passwordCorrecto = await comparePassword(
    password,
    existeUsuario.password
  );
  if (!passwordCorrecto) {
    throw new Error("El password es incorrecto");
  }
  // revisar el token
  return {
    token: crearToken(existeUsuario, process.env.SECRET, "24h"),
  };
};

const obtenerUsuario = (_, { token }) => {
  const user = jwt.verify(token, process.env.SECRET);
  return user;
};

module.exports = { autenticarUsuario, obtenerUsuario };
