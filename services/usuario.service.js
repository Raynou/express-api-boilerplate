const { Usuario } = require("../models/usuario.js");

async function findAllUsuarios() {
  const response = await Usuario.findAll();
  const users = response.map((data) => data.dataValues);
  return users;
}

async function findUserById(id) {
  const response = await Usuario.findByPk(id);
  const user = response.dataValues;
  return user;
}

async function createUser(user) {
  await Usuario.create(user);
}

async function updateUser(user) {
  await Usuario.update(user, { where: { id: user.id } });
}

async function deleteUser(id) {
  const usuario = await Usuario.findByPk(id);
  await usuario.destroy();
}

module.exports = {
  findAllUsuarios,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
};
