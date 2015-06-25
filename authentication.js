module.exports.ensureAuthenticated = function(req, res, next) {

    var authToken = req.get('x-auth-token');

    if (!authToken)
        return res.sendStatus(401);

    next();
}
