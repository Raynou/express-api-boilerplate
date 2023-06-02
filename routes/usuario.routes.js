const { Router } = require("@awaitjs/express");
const controller = require("../controllers/usuario.controller.js");

const router = Router();

router.getAsync("/", controller.getUsers);
router.getAsync("/:id", controller.getUserById);
router.postAsync("/", controller.createUser);
router.patchAsync("/", controller.updateUser);
router.deleteAsync("/:id", controller.deleteUser)

module.exports = router;
