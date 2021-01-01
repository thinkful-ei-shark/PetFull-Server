const express = require('express')
const cors = require('cors')
const morgan = require("morgan")
const helmet = require("helmet")
const { NODE_ENV } = require('./config')
const peopleRouter = require('../people/people.router')
const petRouter = require('../pets/pets.router')
const app = express()

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
    skip: () => NODE_ENV === 'test',
  }))
app.use(helmet())
app.use(cors())

app.use('/people', peopleRouter)
app.use('/pets', petRouter)

module.exports = app
