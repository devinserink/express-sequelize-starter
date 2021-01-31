const Sequelize = require('sequelize')
const ThingModel = require('./models/thing')

const env = process.env.NODE_ENV || 'development'
const config = require('./config/config.json')[env]

const Db = new Sequelize({ database: config.database, username: config.username, password: config.password, dialect: 'postgres' })
const Thing = ThingModel(Db, Sequelize.DataTypes)

/*
sequelize.sync({ force: true }).then(() => {
    console.log('Models synchronized successfully')
})
*/

module.exports = {
  Thing,
  Db
}
