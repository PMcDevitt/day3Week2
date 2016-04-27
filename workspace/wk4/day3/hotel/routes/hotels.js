var router = require('express').Router()
var db = require('../config/database')

router.get('/', function (req, res) {
   res.render('hotels', { hotels: 'hotels' });
})

module.exports = router
