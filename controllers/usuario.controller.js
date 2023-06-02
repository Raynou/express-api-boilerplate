const service = require("../services/usuario.service.js");
const { Request, Response } = require("express");

/**
 * @param {Request} req 
 * @param {Response} res 
 */
async function getUsers(req, res) {
  const usuarios = await service.findAllUsuarios();
  res.send(usuarios);
}

/**
 * @param {Request} req 
 * @param {Response} res 
 */
async function getUserById(req, res) {
  const usuario = await service.findUserById(req.params.id);
  res.send(usuario);
}

/**
 * @param {Request} req 
 * @param {Response} res 
 */
async function createUser(req, res) {
  try {
    await service.createUser(req.body);
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
}

/**
 * @param {Request} req 
 * @param {Response} res 
 */
async function updateUser(req, res) {
  try {
    await service.updateUser(req.body);
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(400);
  }
}

/**
 * @param {Request} req 
 * @param {Response} res 
 */
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
