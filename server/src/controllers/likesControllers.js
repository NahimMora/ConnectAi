const { Like } = require("../db");
const axios = require("axios");

const like = async () => {

    return await Like.create()

}

const unLike = async (idPost) => {
    
    return await Like.destroy({ where: {id: idPost}})

}

module.exports = {
    like,
    unLike
}