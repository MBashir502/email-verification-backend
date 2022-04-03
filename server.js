const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT;
const userRoute = require('./routes/userRoute')

mongoose.connect(process.env.DATABASE_LINK, ()=>{
    console.log('DB CONNECTED SUCCESSFULLY');
})
app.use(cors())
app.use(express.json())
app.use('/api', userRoute);
app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`);
})