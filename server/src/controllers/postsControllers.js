const { Post } = require("../db");
const axios = require("axios");

const allPosts = async () => {
    
    const posts = await Post.findAll()
    return posts
}

const postId = async ( postId ) => {

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

module.exports = {
    allPosts,
    postId,
    newPost,
    editPost
}