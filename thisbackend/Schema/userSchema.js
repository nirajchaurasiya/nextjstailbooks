const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        // required: true,
        // unique: true,
    },
    phone: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true
    },
    shortquote: {
        type: String,
    },
    aboutyourself: {
        type: String,
    },
    from: {
        type: String,
    },
    city: {
        type: String,
    },
    hobbies: {
        type: String,
    },
    status: {
        type: String,
    },
    profile: {
        type: String,
        default: ''
    },
    cover: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
})

userSchema.pre('save', async function () {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
});

module.exports = mongoose.model('userdata', userSchema);