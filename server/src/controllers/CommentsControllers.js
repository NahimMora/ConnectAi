const { Comment } = require("../db");
const axios = require("axios");

const oneComment = async (commentId) => {

    const comment = await Comment.findAll({ where: {id: commentId}})

    return comment

}

const editComment = async (idComments, content) => {
    
    const comment = await Comment.update({content: content}, {where: { id: idComments}})
    return comment
}

const newComment = async (postId, content) => {

    const comment = await Comment.create({ content: content, PostId: postId})

    return content
}

module.exports = {
    oneComment,
    editComment,
    newComment
}