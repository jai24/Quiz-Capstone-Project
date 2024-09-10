const express = require('express')
const app = express()
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const quizData = require('../schema/quizData')



router.post('/save', async (req,res)=>{
        const {question,selectedAnswer, options, optionsImage, optionsTxt} = req.body;

        try{
            const data = await quizData.create({question,selectedAnswer, options, optionsImage, optionsTxt})
            return res.status(201).json({
                message: "quiz added to DB sucessfully"
            })
        }
        catch(e){
            return res.status(400).json({
                message: e.message
        }
})

module.exports = router;
