describe("NoteRouter", () => {
    const NoteRouter = require('../NoteRouter');

    let noteRouter;
    let noteService;
    let response;

    describe('with a functional note service', function () {

        beforeEach(function () {
            // Creating spies for NoteService and Express response
            noteService = jasmine.createSpyObj('noteService', {
                read: Promise.resolve('resolve'),
                list: Promise.resolve('resolve'),
                add: Promise.resolve('resolve'),
                remove: Promise.resolve('resolve'),
                update: Promise.resolve('resolve'),
            });

            response = jasmine.createSpyObj('response', ['status', 'json']);
            response.status.and.returnValue(response);
            response.render = function render() { };
            // Inject the spy into NoteRouter
            noteRouter = new NoteRouter(noteService);
            spyOn(response, 'render').and.callThrough();
        });

        it('Should render be able to render page accordingly', function (done) {
            noteRouter.renderHomepage({
                auth: {
                    user: 'testSubject'
                }
            }, response)
            expect(response.render).toHaveBeenCalledWith('index', { user: 'testSubject' });
            noteRouter.renderListPage({
                auth: {
                    user: 'testSubject'
                }
            }, response).then(function (data) {
                expect(response.render).toHaveBeenCalledWith('list', { notes: 'resolve' });
                done()
            })
        })

        it('Should call list in response to a GET', function (done) {
            noteRouter.getNote({
                auth: {
                    user: 'testSubject'
                }
            }, response).then(function () {
                // Everything ends after response JSON call
                expect(noteService.list).toHaveBeenCalledWith('testSubject');
                expect(response.status).not.toHaveBeenCalled();
                done();
            });
        });

        it('Should call add in response to a POST', function (done) {
            noteRouter.createNote({
                auth: {
                    user: 'testSubject'
                },
                body: {
                    title: 'testTitle',
                    note: 'testNote'
                }
            }, response).then(function () {
                // Everything ends after response JSON call
                expect(noteService.add).toHaveBeenCalledWith('testTitle', 'testNote', 'testSubject');
                expect(response.status).not.toHaveBeenCalled();
                done();
            });
        });

        it('Should call update in response to a PUT', function (done) {
            noteRouter.updateNote({
                auth: {
                    user: 'testSubject'
                },
                body: {
                    title: 'testTitle',
                    note: 'editedTestNote'
                }
            }, response).then(function () {
                // Everything ends after response JSON call
                expect(noteService.update).toHaveBeenCalledWith('testTitle', 'editedTestNote', 'testSubject');
                expect(response.status).not.toHaveBeenCalled();
                done();
            });
        });

        it('Should call delete in response to a DELETE', function (done) {
            noteRouter.deleteNote({
                auth: {
                    user: 'testSubject'
                },
                params: {
                    id: 'testTitle'
                }
            }, response).then(function () {
                // Everything ends after response JSON call
                expect(noteService.remove).toHaveBeenCalledWith('testTitle', 'testSubject');
                expect(response.status).not.toHaveBeenCalled();
                done();
            });
        });

    });

    describe('with an abnormal note service', function () {

        beforeAll(function () {

        });

        afterAll(function () {

        });

        beforeEach(function () {
            // Creating spies for NoteService and Express response
            noteService = jasmine.createSpyObj('noteService', {
                'list': Promise.reject(),
                'add': Promise.reject(),
                'remove': Promise.reject(),
                'update': Promise.reject()
            });

            response = jasmine.createSpyObj('response', ['status', 'json']);
            response.status.and.returnValue(response);
            response.json.and.returnValue(response);

            // Inject the spy into NoteRouter
            noteRouter = new NoteRouter(noteService);
        });

        it('Should return error in response to a GET', function (done) {
            noteRouter.getNote({
                auth: {
                    user: 'testSubject'
                }
            }, response).then(function () {
                // Everything ends after response JSON call
                expect(noteService.list).toHaveBeenCalledWith('testSubject');
                expect(response.status).toHaveBeenCalledWith(500);
                done();
            }).catch(done.fail);
        });

        it('Should return error in response to a POST', function (done) {
            noteRouter.createNote({
                auth: {
                    user: 'testSubject'
                },
                body: {
                    title: 'testTitle',
                    note: 'testNote'
                }
            }, response).then(function () {
                // Everything ends after response JSON call
                expect(noteService.add).toHaveBeenCalledWith('testTitle', 'testNote', 'testSubject');
                expect(response.status).toHaveBeenCalledWith(500);
                done();
            });
        });

        it('Should return error in response to a PUT', function (done) {
            noteRouter.updateNote({
                auth: {
                    user: 'testSubject'
                },
                body: {
                    title: 'testTitle',
                    note: 'editedTestNote'
                }
            }, response).then(function () {
                // Everything ends after response JSON call
                expect(noteService.update).toHaveBeenCalledWith('testTitle', 'editedTestNote', 'testSubject');
                expect(response.status).toHaveBeenCalledWith(500);
                done();
            });
        });

        it('Should return error in response to a DELETE', function (done) {
            noteRouter.deleteNote({
                auth: {
                    user: 'testSubject'
                },
                params: {
                    id: 'testTitle'
                }
            }, response).then(function () {
                // Everything ends after response JSON call
                expect(noteService.remove).toHaveBeenCalledWith('testTitle', 'testSubject');
                expect(response.status).toHaveBeenCalledWith(500);
                done();
            });
        });

    });
});
