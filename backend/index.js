const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()
const PORT = process.env.PORT || 3000;



app
app.listen(PORT,()=>{
    mongoose.connect(process.env.DB_CONNECT)
    console.log("Server is up")
})