const express = require('express')
const { Thing } = require('../sequelize')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.send('API base, nothing to see here')
})

router.get('/things/:thingId?', function (req, res) {
  let query
  if (req.params.thingId) {
    query = Thing.findOne({
      where: {
        id: req.params.thingId
      }
    })
  } else query = Thing.findAll()
  return query.then(things => res.json(things))
})

router.post('/things', async function (req, res, next) {
  const thing = await Thing.create(req.body)
  res.status(201).json(thing)
})

module.exports = router
