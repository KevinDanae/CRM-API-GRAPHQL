const Usuario = require("../models/usuarios");
const { hashPasword } = require("./hashPasword");

const nuevoUsuario = async (_, { input }) => {
  const { email, password } = input;
  // revisar que el usuario no este registrado,
  const userExist = await Usuario.findOne({ email });
  if (userExist) {
    throw new Error("El usuario ya existe");
  }
  // hashear el password
  input.password = hashPasword(password);
  // guardar en base de datos
  try {
    const usuario = new Usuario(input);
    usuario.save();
    return usuario;
  } catch (error) {
    console.log("Ocurrio un error", error);
  }
};

module.exports = nuevoUsuario;
