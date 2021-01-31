const request = require('supertest')
const app = require('../app')
const { Db } = require('../sequelize')

describe('Thing Endpoints', () => {
  test('should list all things', async () => {
    const res = await request(app)
      .get('/api/things')
    expect(res.statusCode).toEqual(200)
    expect(res.body[0]).toHaveProperty('name')
  })
  test('should fetch one thing', async () => {
    const res = await request(app)
      .get('/api/things/1')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('name')
  })
  test('should create a new thing', async () => {
    const res = await request(app)
      .post('/api/things')
      .send({
        name: 'Jade Testing Thing',
        miscNum: 9
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('name')
  })
})

describe('Non existent route', () => {
  test('should 404', async () => {
    const res = await request(app)
      .get('/somenonexistenturl/resource.test')
    expect(res.statusCode).toEqual(404)
  })
})

afterAll(async done => {
  await Db.close()
  done()
})
