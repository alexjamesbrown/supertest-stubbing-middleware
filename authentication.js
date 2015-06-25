module.exports.ensureAuthenticated = function(req, res, next) {

    console.log('I am authenticating...')

    var authToken = req.get('x-auth-token');

    if (!authToken)
        return res.sendStatus(401);

    next();
}
