const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        maxlength: 15,
        minlength:3
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    birthday:{
        type: Date,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('userModel', userSchema)