const { allPosts, postById, newPost, editPost, deletePost } = require("../controllers/postsControllers")

const getPosts = async (req, res) => {

    try {
      const result = await allPosts()
      res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
  
}

const getPostsId = async (req, res) => {

  const { postId } = req.params

    try {
      const result = await postById(postId)
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

const postPosts = async (req, res) => {

  const { content } = req.body

    try {
      const result = await newPost(content)
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

const putPostsId = async (req, res) => {

  const { postId } = req.params
  const { content } = req.body

    try {
      const result = await editPost(postId, content)
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }

}

const deletePostId = async (req, res) => {

  const { postId } = req.params

    try {
      const result = await deletePost(postId)
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }

}

module.exports = {
    getPosts,
    getPostsId,
    postPosts,
    putPostsId,
    deletePostId
}