const mongoose = require('mongoose')
const Quiz = mongoose.Schema({
    quizname: {
        type: String,
        require: true
    },
    questionname: {
        type: String,
        require: true
    },
    options: {
        type: Array,
        require: true
    },
    answer: {
        type: String,
        require: true
    }
})

const Modal = mongoose.model('quiz', Quiz)

module.exports = Modal