const express = require('express')
const Router = express.Router()
const { getall, insert, deletes, getsingledata, updatesingleuser } = require('./allroutes')

Router.get('/getall', getall)
Router.post('/insert', insert)
Router.post('/delete', deletes)
Router.post('/edit2', getsingledata)
Router.post('/update', updatesingleuser)

module.exports = Router