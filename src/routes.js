const {Router} = require("express");
const routes = new Router()
const CharacterController = require("./controllers/char-ctrl")

routes.get("/health", (req, res) => {
    res.status(200).send("ok")
})

routes.get("/personagens", CharacterController.list)

module.exports = routes