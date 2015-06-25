var express = require('express'),
    router = express.Router(),
    authentication = require('./authentication');

router.all('*', authentication.ensureAuthenticated);

router.get('/', function(req, res, next) {
    return res.send('Hello');
});

router.post('/', function(req, res, next) {
    return res.send('Posted');
});

module.exports = router;
