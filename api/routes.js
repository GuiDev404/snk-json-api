const { Router } = require("express");
const router = Router();

const { getTitans, getHumans, getAll, getBySearch, getByID } = require("./controllers");
const { verifyID } = require("./middlewares");

router.param('id', verifyID)

router.get("/characters", getAll);
router.get("/characters/titans", getTitans);
router.get("/characters/humans", getHumans);
router.get("/characters/search", getBySearch);
router.get("/characters/:id", getByID);

module.exports = router;
