const { User } = require("../db");
const axios = require("axios");

const newUser = async (username, email, password, profilePicture, login) => {

    const newActivity = await User.create({
        username, email, password, profilePicture, login
    })

    return newActivity
}

const accessUser = async (email, password) => {
    
    const user = await User.findAll({ where: { email: email, password: password}});
    await User.update({login: "true"} , { where: { email: email, password: password}});

    return user ? user : alert("Error")
}

const unAccessUser = async (email) => {
    
    const user = await User.update({login: "false"} , { where: { email: email }});

    return user
}

module.exports = {
    newUser,
    accessUser,
    unAccessUser
}