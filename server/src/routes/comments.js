const { Router } = require("express");
const router = Router();

const { getCommentsId, putCommentsId, postComments, deleteCommentsId} = require("../handlers/CommentsHandlers")

router.post("/:postId/create", postComments)
router.get("/:postId/comments", getCommentsId)
router.put("/comments/:idComments/edit", putCommentsId)
router.delete("/comments/:idComments/delete", deleteCommentsId);

module.exports = router;