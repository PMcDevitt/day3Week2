var request = require('supertest')
var db = require('../../config/database')
var app = require('../../app')


describe('Given a hotel', function () {
  // beforeEach(function (done) {
  //     if (err) done(err)
  //     done()
  //   })

  // after(function (done) {
  //     if (err) done(err)
  //     done()
  //   })

  describe('GET /hotels', function () {
    it('responds with a 200 status code', function (done) {
      request(app).get('/hotels')
        .expect(200, done)
    })
  })
})
