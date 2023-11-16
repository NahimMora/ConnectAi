const { Router } = require("express");
const router = Router();

const {postNewUser, getAllUsers, getUserById, putUserById, deleteUserById } = require("../handlers/userHandlers")

router.post("/signup", postNewUser);
router.get("/", getAllUsers)
router.get("/:idUser", getUserById)
router.put("/edit/:idUser", putUserById)
router.delete("/delete/:idUser", deleteUserById)

module.exports = router;