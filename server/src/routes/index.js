const { Router } = require("express");

const router = Router();

const routerUser = require("./user")
const routerPosts = require("./posts")
const routerComments = require("./comments")
const routerProfile = require("./profile")
const routerLikes = require("./likes");

router.use("/user", routerUser)
router.use("/posts", routerPosts)
router.use("/profile", routerProfile)
router.use("/comments", routerComments)
router.use("/likes", routerLikes)

module.exports = router;
