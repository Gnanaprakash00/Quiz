const { create } = require('../Modal/usermodal')
const User = require('../Modal/usermodal')
module.exports.getall = async(req, res) => {
    try {
        const user = await User.find()
        res.status(200).send({ user })
    } catch (error) {
        res.send({ error: 'error' })
    }
}
module.exports.deletes = async(req, res) => {
    try {
        await User.findByIdAndDelete(req.body.id)
        res.send({ delete: 'success' })
    } catch (error) {
        res.send({ error: 'delete' })
    }
}
module.exports.insert = async(req, res) => {
    try {
        const user = User.insertMany(req.body.datas)
        res.send({ success: 'success' })
    } catch (error) {
        res.send({ error: 'error' })
    }
}
module.exports.getsingledata = async(req, res) => {
    try {
        const user = await User.findOne({ _id: req.body.id })
        res.send({ user })
    } catch (error) {
        res.send({ error: 'error' })
    }
}
module.exports.updatesingleuser = async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.id, {
            quizname: req.body.quizname,
            questionname: req.body.questionname,
            options: req.body.options,
            answer: req.body.answer
        })
        res.send({ success: 'success' })
    } catch (error) {
        res.send({ error: 'error' })
        console.log(error.message);
    }
}