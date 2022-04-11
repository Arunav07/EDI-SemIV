const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({error: 'Invalid Email address'})
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
    },
    profilePicture: {
        type: String,
        default: "https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
    },
    age: {
        type: String,
        minlength: 10,
        required: true
    },
    StudOrTeach: {
        type: String,
        required: true
    },
})
    const auth = mongoose.model('User', userSchema,'user')
module.exports = auth