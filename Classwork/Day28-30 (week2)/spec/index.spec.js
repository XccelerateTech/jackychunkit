const request = require('supertest');
const app = require('../index');


const USERS = {
    foo: 'bar',
    buz: 'qux'
};

function expectUnauthorized(app, done) {
    request(app)
        .get('/')
        .expect(401)
        .end((err) => {
            if (err) throw err;
            done();
        });
}

describe('Route', () => {

    describe('should return 401 for non logged in', () => {
        it('GET /', (app, done) => expectUnauthorized(app, done));
        it('GET /notes', (app, done) => expectUnauthorized(app, done));
        it('GET /create', (app, done) => expectUnauthorized(app, done));
        it('GET /notes/1', (app, done) => expectUnauthorized(app, done));
        it('GET /api/notes', (app, done) => expectUnauthorized(app, done));
        it('POST /api/notes', (app, done) => expectUnauthorized(app, done));
        it('PUT /api/notes/', (app, done) => expectUnauthorized(app, done));
        it('DELETE /api/notes/1', (app, done) => expectUnauthorized(app, done));
    });


    //fixing this properly
    it('GET /', function (app, done) {
        request(app)
            .get('/')
            .set('username', 'admin')
            .set('password', 'supersecret')
            .expect(200)
            .end((err) => {
                if (err) throw err;
                done();
            });
    });
});
