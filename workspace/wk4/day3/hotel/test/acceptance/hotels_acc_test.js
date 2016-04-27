'use strict'

require('../helper')

var http = require('http')
var server

before(function () {
  server = http.createServer(require('../../app'))
  server.listen(0)
  browser.baseUrl = 'http://localhost:' + server.address().port
})

beforeEach(function () {
  browser.ignoreSynchronization = true
})

after(function () {
  server.close()
})

describe('Given a Hotel Page', function () {
  describe('When I visit the /homepage', function () {
    it('Then I should see the titles as "Welcome to the Hotel List"', function () {
      browser.get('/hotels')
      element(by.id('hotelTitle')).getText().then(function (isPresent) {
        expect(isPresent).to.equal('Welcome to the Hotel List')
      })
    })
  })
})
