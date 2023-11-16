const { newUser, allUsers, userById, editUser, deleteUser } = require("../controllers/userControllers")

const postNewUser = async (req, res) => {

  let {username, email, password, profilePicture} = req.body

    try {
      const result = await newUser(username, email, password, profilePicture)
      res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
  
}

const getAllUsers = async (req, res) => {

  try {
    const result = await allUsers()
    res.status(200).json(result);
  } catch (error) {
      res.status(404).json({ error: error.message });
  }

}

const getUserById = async (req, res) => {

  let { idUser } = req.params

  try {
    const result = await userById(idUser)
    result.length != 0 ? res.status(200).json(result) : res.status(400).json("Email y/o contraseña incorrecta")
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

}

const putUserById = async (req, res) => {

  let { idUser } = req.params
  let {username, email, password, profilePicture} = req.body

  try {
    const result = await editUser( idUser, username, email, password, profilePicture )
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

}

const deleteUserById = async (req, res) => {

  let { idUser } = req.params

  try {
    const result = await deleteUser(idUser)
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

}

module.exports = {
    postNewUser,
    getAllUsers,
    getUserById,
    putUserById,
    deleteUserById
}