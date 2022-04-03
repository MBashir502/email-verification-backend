const postModel = require('../models/postModel')
const postLogic = (req, res)=>{
    const postRequest = new postModel ({
        title:req.body.title,
        description:req.body.description,
        tags:req.body.tags
    })
    postRequest.save().then((data)=>{
        res.json(data)
    }).catch((error)=>{
        res.json(error)
    })
}
module.exports = postLogic