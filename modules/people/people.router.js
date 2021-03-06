const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  return res
  .status(200)
  .json(People.get())
})

router.post('/', json, (req, res) => {
  const { person } = req.body
  People.enqueue(person)
  return res
  .status(201)
  .json(person)
})

module.exports = router
