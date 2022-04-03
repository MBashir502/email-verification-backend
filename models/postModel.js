const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        minlength:[3, 'title cannot be less than 3 characters'],
        maxlength:[15, 'title cannot be more than 15 characters']
    },
    description:{
        type: String,
        required:true,
        maxlength:[50, 'title cannot be more than 50 characters']
    },
    tags:{
        type: String,
    }
})
module.exports = mongoose.model('postModel', postSchema)