const {Router} = require("express");
const router = Router();

const {getPropiedad, gePropiedad, postPropiedad, updatePropiedad, deletePropiedad} = require("../controllers/casa");

router.route("/")
    .get(getPropiedad)
    .post(postPropiedad)

router.route("/:id")
    .get(gePropiedad)
    .put(updatePropiedad)
    .delete(deletePropiedad)

module.exports = router;