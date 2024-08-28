const express = require('express');
const  mongoose  = require('mongoose');
const app = express()
const PORT = process.env.PORT || 3000;
const authRoute = require('./routes/auth')
const dotenv = require('dotenv')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

dotenv.config()
const cors = require('cors');
app.use(cors({
    origin: "*"
}));

app.get('/',(req,res)=>{
    res.send("send")
})

app.use('/v1/auth', authRoute);

app.listen(PORT,()=>{
    mongoose.connect(process.env.DB_CONNECT)
    console.log("Server is up")
})