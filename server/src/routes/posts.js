const { Router } = require("express");
const router = Router();

const {getPosts, getPostsId, postPosts, putPostsId, deletePostId } = require("../handlers/postsHandlers")

router.post("/create", postPosts)
router.get("/", getPosts);
router.get("/:postId", getPostsId)
router.put("/edit/:postId", putPostsId)
router.delete("/delete/:postId", deletePostId)

module.exports = router;