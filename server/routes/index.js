const {addCarrera} = require("../controllers/carreras");

const {addInteres} = require("../controllers/intereses");

const {Router} = require("express");

const router = Router();

router.post("/carrera",addCarrera);

router.post("/interes",addInteres);

module.exports={router};
