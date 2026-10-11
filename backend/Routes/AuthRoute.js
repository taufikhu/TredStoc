const {AuthMiddlewares} = require("../Middlewares/AuthMiddlemares")
const router = require("express").Router();

router.post("/", AuthMiddlewares);

module.exports = router