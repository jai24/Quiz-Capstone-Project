// const express = require('express')
// const app = express()
//  const router = express.Router()
// // const bcrypt = require('bcrypt')
// // const jwt = require('jsonwebtoken')
// const quizData = require('../schema/quizData')



// router.post('/save', async (req,res)=>{
//         const {question,selectedAnswer, options, optionsImage, optionsTxt} = req.body;

//         try{
//             const data = await quizData.create({question,selectedAnswer, options, optionsImage, optionsTxt})
//             return res.status(201).json({
//                 message: "quiz added to DB sucessfully"
//             })
//         }
//         catch(e){
//             return res.status(400).json({
//                 message: e.message
//         })
// }})

// module.exports = router;
const express = require('express');
const router = express.Router();
const app = express()
const quizData = require('../schema/quizData'); // Ensure this is the correct path to your schema
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data



router.get('/', (req,res)=>{
    res.json({
        message: 'you are in'
    })
})

// POST route to save quiz data
router.post('/save', async (req, res) => {
    const { question, selectedAnswer, options, optionsImage, optionsTxt } = req.body;
    console.log("datas", req.body)
    try {
        const data = await quizData.create({
            question,
            selectedAnswer,
            options,
            optionsImage,
            optionsTxt
        });
        return res.status(201).json({
            message: "Quiz added to DB successfully",
            data
        });
    } catch (e) {
        return res.status(400).json({
            message: e.message
        });
    }
});

module.exports = router;
