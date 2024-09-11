const express = require('express');
const  mongoose  = require('mongoose');
const app = express()
const PORT = process.env.PORT || 3000;
const authRoute = require('./routes/auth')
const dataRoute = require('./routes/quizDetails')
const dotenv = require('dotenv')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json());

dotenv.config()
const cors = require('cors');
app.use(cors({
    origin: "*"
}));

app.get('/',(req,res)=>{
    res.send("send")
})

app.use('/v1/auth', authRoute);

app.use('/v1/quizData',dataRoute)

app.listen(PORT,()=>{
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.error("Failed to connect to MongoDB:", err.message);
    });
    
    console.log("Server is up")
})