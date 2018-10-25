import * as request from 'supertest'
import app from '../testServer'
import { UserSchema } from '../models/userModel'
import { compareResponseWithSchema } from '../helpers/validation'

const postRequest = { firstName: 'Oliver', lastName: 'Franke' }

describe('POST /user', () => {
  it('respond with json containing created user', done => {
    request(app)
      .post('/user')
      .send(postRequest)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(res => compareResponseWithSchema(res.body, UserSchema))
      .end(done)
  })
})

describe('GET /user', () => {
  it('respond with json containing a list of all users', done => {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(res =>
        res.body.map((item: Object) =>
          compareResponseWithSchema(item, UserSchema),
        ),
      )
      .end(done)
  })
})
