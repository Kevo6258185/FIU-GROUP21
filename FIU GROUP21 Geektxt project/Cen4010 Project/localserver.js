const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const db = require('./db')
const routes = require('./routes/index.js')

app.use(express.json())
app.use(cors())
app.use('/geektextapi', routes)

app.listen(5000, () => console.log('local host has started on port 5000'))