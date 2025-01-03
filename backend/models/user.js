const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    phone_number: { 
        type: Number,
        required : true

    }

})



const userModel =  mongoose.model('user',userSchema)

module.exports = userModel;