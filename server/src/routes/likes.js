const { Router } = require("express");
const router = Router();

const { postLike, deleteLike } = require("../handlers/likesHandlers")

router.post("/:idPosts/like", postLike);
router.delete("/:postId/unLike", deleteLike)

module.exports = router;