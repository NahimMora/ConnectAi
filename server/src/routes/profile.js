const { Router } = require("express");
const router = Router();

const {getProfile, putProfile} = require("../handlers/profileHandlers")

router.get("/:username", getProfile);
router.put("/:username/edit", putProfile)

module.exports = router;
