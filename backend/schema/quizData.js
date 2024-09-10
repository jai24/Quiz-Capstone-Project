const mongoose = require('mongoose')

const quizData = new mongoose.Schema({
    question: {
        type: Object,
        required: true
    },
    selectedAnswet: {
        type: String,
        required: true
    },
    options: {
        type: Object,
        required: true
    },
    optionsImage:{
        type: Object,
        required: true
    },
    optionsTxt:{
        type: Object,
        required: true
    }
})

module.exports = mongoose.model('quizData', quizData);