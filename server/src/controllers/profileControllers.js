const { User } = require("../db");
const axios = require("axios");

const usernameProfile = async (username) => {

    const profiles = User.findAll({where: { username: username}})

    return profiles

}

const usernameProfileEdit = async (username, email, password, profilePicture) => {
    
    const profile = await User.update({ email: email, password: password, profilePicture: profilePicture }, { where: { username: username } });
    return profile
}

module.exports = {
    usernameProfile,
    usernameProfileEdit
}