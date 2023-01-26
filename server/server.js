const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Router = require('./Router/routerlinks')
const mongoose = require('mongoose')
const Quiz = require('./Modal/usermodal')
const Port = 4000
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/api', Router)

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/Quiz').then(() => console.log('connected'))
app.listen(Port, () => {
    console.log('server is on');
})