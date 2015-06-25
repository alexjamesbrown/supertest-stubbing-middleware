var agent;

var assert = require('assert');

describe('My routes', function() {

    before(function() {
        agent = require('supertest')
            .agent(require('../app'));
    });

    describe('GET /', function() {
        describe('with authentication header set', function() {
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
        describe('without authentication header set', function() {
            it('returns a 401', function(done) {
                agent
                    .get('/')
                    .expect(401)
                    .end(function(err, res) {
                        if (err) return done(err);
                        done();
                    });
            });
        });
    });

    describe('POST /', function() {
        describe('with authentication header set', function() {
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
        describe('without authentication header set', function() {
            it('returns a 401', function(done) {
                agent
                    .post('/')
                    .expect(401)
                    .end(function(err, res) {
                        if (err) return done(err);
                        done();
                    });
            });
        });
    });
});
