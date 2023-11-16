const { Like } = require("../db");
const axios = require("axios");

const like = async () => {

    return await Like.create()

}

const unLike = async (idPost) => {
    
    return await Like.destroy({ where: {id: idPost}})

}

const allLikes = async () => {

    return await Like.findAll()
    
}

const likeById = async (idLike) => {

    return await Like.findAll({where: {id: idLike}})

}

module.exports = {
    like,
    unLike,
    allLikes,
    likeById
}