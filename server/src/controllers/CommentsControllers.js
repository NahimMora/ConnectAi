const { Comment } = require("../db");

const oneComment = async (commentId) => {

    const comment = await Comment.findAll({ where: {id: commentId}})

    return comment

}

const editComment = async ( commentId, content ) => {
    
    const comment = await Comment.update({content: content}, {where: { id: commentId}})
    return comment
}

const newComment = async (postId, content) => {

    const comment = await Comment.create({ content: content, PostId: postId})

    return comment
}

const deleteComment = async (commentId) => {
    
    const comment = await Comment.destroy({where: {id: commentId}});

    return comment
}

module.exports = {
    oneComment,
    editComment,
    newComment,
    deleteComment
}