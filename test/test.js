var agent,
    assert = require('assert'),
    authentication = require('../authentication'),
    sinon = require('sinon');

describe('My routes', function() {

    var ensureAuthenticatedSpy;

    before(function() {

        //important to stub before we load our app
        ensureAuthenticatedSpy = sinon.stub(authentication, 'ensureAuthenticated');

        //this ensures we call our next() function on our middleware
        ensureAuthenticatedSpy.callsArg(2);

        agent = require('supertest')
            .agent(require('../app'));
    });

    afterEach(function() {
        //assert that our middleware was called once for each test
        sinon.assert.calledOnce(ensureAuthenticatedSpy);

        ensureAuthenticatedSpy.reset();
    })

    describe('GET /', function() {
        it('returns hello', function(done) {
            agent
                .get('/')
                .set('X-Auth-Token', 'xyz123')
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    assert(res.text == 'Hello')
                    done();
                });
        });
    });

    describe('POST /', function() {
        it('returns hello', function(done) {
            agent
                .post('/')
                .set('X-Auth-Token', 'xyz123')
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    assert(res.text == 'Posted')
                    done();
                });
        });
    });
});
