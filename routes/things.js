const express = require('express')
const { Thing } = require('../sequelize')
const router = express.Router()

/* GET Things listing. */
router.get('/', async function (req, res, next) {
  const things = await Thing.findAll()
  res.render('things', { title: 'Thing List', things: things })
})

module.exports = router
