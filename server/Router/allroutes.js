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
        res.send({ user })
    } catch (error) {
        res.send({ error: 'error' })
    }
}