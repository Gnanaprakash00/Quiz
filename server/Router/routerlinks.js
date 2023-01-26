const express = require('express')
const Router = express.Router()
const { getall, insert, deletes } = require('./allroutes')

Router.get('/getall', getall)
Router.post('/insert', insert)
Router.post('/delete', deletes)

module.exports = Router