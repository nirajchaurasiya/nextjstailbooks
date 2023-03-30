const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    desc: {
        type: String,
    },
    userId: {
        type: String,
    },
    postImage: {
        type: String,
    },
    name: {
        type: String,
    },
    userImage: {
        type: String,
    },
    likes: {
        type: [String],
        default: ''
    },
    comment: [
        {
            userName: {
                type: String,
                default: ''
            },
            userId: {
                type: String,
                default: ''
            },
            userImg: {
                type: String,
                default: ''
            }
        }

    ]
}, {
    timestamps: true
})


module.exports = mongoose.model('postdata', postSchema);