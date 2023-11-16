const { Router } = require("express");
const router = Router();

const { postLike, deleteLike, getAllLikes, getLikeId } = require("../handlers/likesHandlers")

router.post("/:idPosts/like", postLike);
router.get("/likes", getAllLikes);
router.get("/Like/:idLike", getLikeId)
router.delete("/:postId/unLike", deleteLike)

module.exports = router;