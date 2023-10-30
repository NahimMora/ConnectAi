const { usernameProfile, usernameProfileEdit} = require("../controllers/profileControllers")

const getProfile = async (req, res) => {

  let {username} = req.params

    try {
      const result = await usernameProfile(username)
      res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
  
}

const putProfile = async (req, res) => {

    let {username, email, password, profilePicture} = req.params
  
      try {
        const result = await usernameProfileEdit(username, email, password, profilePicture)
        res.status(200).json(result);
      } catch (error) {
          res.status(404).json({ error: error.message });
      }
    
  }


module.exports = {
    getProfile,
    putProfile
}