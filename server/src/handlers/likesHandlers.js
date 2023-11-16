const { like, unLike } = require("../controllers/likesControllers")

const postLike = async (req, res) => {

  let { idPost } = req.params

    try {
      const result = await like(idPost)
      res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
  
}

const getAllLikes = async (req, res) => {

  try {
    const result = await allLikes()
    res.status(200).json(result);
  } catch (error) {
      res.status(404).json({ error: error.message });
  }

}

const getLikeId = async (req, res) => {

  let { idLike } = req.params

  try {
    const result = await likeById(idLike)
    res.status(200).json(result);
  } catch (error) {
      res.status(404).json({ error: error.message });
  }

}

const deleteLike = async (req, res) => {

  const { idPost } = req.params

    try {
      const result = await unLike(idPost)
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
  }

module.exports = {
    postLike,
    deleteLike,
    getAllLikes,
    getLikeId
}