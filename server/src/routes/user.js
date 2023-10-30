const { Router } = require("express");
const router = Router();

const {postSignup, login, logout} = require("../handlers/userHandlers")

router.post("/signup", postSignup);
router.post("/login", login)
router.post("/logout", logout)

module.exports = router;
