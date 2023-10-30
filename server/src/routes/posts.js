const { Router } = require("express");
const router = Router();

const {getPosts, getPostsId, postPosts, putPostsId } = require("../handlers/postsHandlers")

router.get("/", getPosts);
router.get("/:postId", getPostsId)
router.post("/create", postPosts)
router.put("/:postId/edit", putPostsId)

module.exports = router;