var request = require('request');
var router = require('express').Router();
var auth = require('../auth');

router.get('/', auth.optional, function (req, res, next) {

  var options = {
    'method': 'GET',
    'url': 'https://books.zoho.com/api/v3/contacts?organization_id=649249007',
    'headers': {
      'Authorization': 'Zoho-authtoken db36e02a50b57e081efe533a8a0f834b',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    }
  };

  request(options, function (error, response, body) {
    if (error) return res.status(500).json({ error });
    try {
      let contacts = JSON.parse(body);
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error });
    }
  });


});

module.exports = router;
