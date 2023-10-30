const { Router } = require("express");
const router = Router();

const { getCommentsId, putCommentsId, postComments } = require("../handlers/CommentsHandlers")

router.get("/:postId/comments", getCommentsId)
router.put("/comments/:idComments/edit", putCommentsId)
router.post("/:postId/create", postComments)

module.exports = router;