const { User } = require("../db");
const axios = require("axios");

const newUser = async (username, email, password, profilePicture) => {

    return await User.create({username, email, password, profilePicture})

}

const allUsers = async () => {
    
    return await User.findAll()

}

const userById = async (idUser) => {
    
    return await User.findAll({where: {id: idUser}})

}

const editUser = async ( idUser, username, email, password, profilePicture ) => {
    
    return await User.update(
        { username, email, password, profilePicture },
        { where: { id: idUser }, returning: true });

}

const deleteUser = async (idUser) => {

    return await User.destroy({where: {id: idUser}})

}

module.exports = {
    newUser,
    allUsers,
    userById,
    editUser,
    deleteUser
}