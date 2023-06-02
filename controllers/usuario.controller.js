const service = require("../services/usuario.service.js");

async function getUsers(req, res) {
  const usuarios = await service.findAllUsuarios();
  res.send(usuarios);
}

async function getUserById(req, res) {
  const usuario = await service.findUserById(req.params.id);
  res.send(usuario);
}

async function createUser(req, res) {
  try {
    await service.createUser(req.body);
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
}

async function updateUser(req, res) {
  try {
    await service.updateUser(req.body);
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(400);
  }
}

async function deleteUser(req, res) {
  try {
    await service.deleteUser(req.params.id);
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(400);
  }
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
