const { newUser, accessUser, unAccessUser } = require("../controllers/userControllers")

const postSignup = async (req, res) => {

  let {username, email, password, profilePicture, login} = req.body

    try {
      const result = await newUser(username, email, password, profilePicture, login)
      res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
  
}

const login = async (req, res) => {

  let {email, password} = req.body

    try {
      const result = await accessUser(email, password)
      result.length != 0 ? res.status(200).json(result) : res.status(400).json("Email y/o contraseña incorrecta")
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

const logout = async (req, res) => {

  let { email } = req.body

    try {
      const result = await unAccessUser(email)
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

module.exports = {
    postSignup,
    login,
    logout
}