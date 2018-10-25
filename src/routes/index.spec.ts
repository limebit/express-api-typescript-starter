import * as request from 'supertest'
import app from '../testServer'

describe('GET /', function() {
  it('respond with json containing a list of all users', done => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { message: 'GET request works!' }, done)
  })
})
