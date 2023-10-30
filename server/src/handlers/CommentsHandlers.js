const { oneComment, editComment, newComment } = require("../controllers/CommentsControllers")

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

  const { idComments } = req.params
  const { content } = req.body

    try {
      const result = await editComment( idComments, content)
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

const postComments = async (req, res) => {

  const { postId } = req.params
  const { content } = req.body

    try {
      const result = await newComment(postId, content)
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

module.exports = {
    getCommentsId,
    putCommentsId,
    postComments
}