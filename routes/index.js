const { Router } = require("express");
const usuarioRouter = require("../routes/usuario.routes.js");
const router = Router();

router.use("/v1/usuarios", usuarioRouter);

module.exports = router;