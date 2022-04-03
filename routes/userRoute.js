const express = require('express');
const postlogic = require('../controllers/postController')
const router = express.Router();
const userController = require('../controllers/userController')
router.post('/signUp', userController)
router.post('/post', postlogic)
module.exports = router