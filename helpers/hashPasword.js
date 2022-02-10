const bcryptjs = require("bcryptjs");

const hashPasword = (password) => {
  const salt = bcryptjs.genSaltSync(10);
  const hashed = bcryptjs.hashSync(password, salt);
  return hashed;
};

const comparePassword = async (password, hashed) => {
    const result = await bcryptjs.compare(password, hashed);
    return result;
}

module.exports = {
    hashPasword,
    comparePassword
};
