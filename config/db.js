const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const conectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.log("hubo un error", error);
    process.exit(1); // detener la aplicacion
  }
};

module.exports = conectDb;
