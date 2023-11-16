const { Post } = require("../db");
const axios = require("axios");

const allPosts = async () => {
    
    const posts = await Post.findAll()
    return posts
}

const postById = async ( postId ) => {

    const post = await Post.findAll({ where: {id : postId}})
    return post
}

const newPost = async (content) => {

    const post = await Post.create({content})

    return post
}

const editPost = async (postId, content) => {

    const post = await Post.update({content: content, where: {id: postId}})

    return post
}

const deletePost = async (postId) => {

    return await Post.destroy({where: {id: postId}})
}

module.exports = {
    allPosts,
    postById,
    newPost,
    editPost,
    deletePost
}