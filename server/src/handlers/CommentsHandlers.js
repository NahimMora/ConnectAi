const { oneComment, editComment, newComment, deleteComment } = require("../controllers/CommentsControllers")

const getCommentsId = async (req, res) => {

  let { commentId } = req.params

    try {
      const result = await oneComment(commentId)
      res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    } 
}

const putCommentsId = async (req, res) => {

  const { commentId } = req.params
  const { content } = req.body

    try {
      const result = await editComment( commentId, content )
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

const postComments = async (req, res) => {

  const { commentId } = req.params
  const { content } = req.body

    try {
      const result = await newComment (commentId, content )
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

const deleteCommentsId = async (req, res) => {

  const { commentId } = req.params

    try {
      const result = await deleteComment(commentId)
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

module.exports = {
    getCommentsId,
    putCommentsId,
    postComments,
    deleteCommentsId
}