const NoteService = require('../NoteService');
const fs = require('fs');
const path = require('path');
const file = `${__dirname}${path.sep}tests${path.sep}test.json`;

describe('Note Service with proper file', () => {
    beforeEach(function (done) {
        fs.unlink(file, () => {
            this.noteService = new NoteService(file);
            done();
        });
    });

    afterEach(function (done) {
        fs.unlink(file, done);
    });

    /* read */

    it('should be able to list empty notes', function (done) {
        this.noteService.list()
            .then((notes) => expect(notes).toEqual({}))
            .then(done)
            .catch(done.fail);
    });

    /* add */

    it('should be able to add a note', function (done) {
        this.noteService.add('ImTitle', 'ImNote', 'ImUser')
            .then(() => this.noteService.read())
            .then((notes) => {
                expect(notes).toEqual({
                    'ImUser': [
                        {
                            title: 'ImTitle',
                            content: 'ImNote'
                        }
                    ]
                });
            })
            .then(done)
            .catch(done.fail);
    });

    /* list */

    it('should be able to return an empty array for new user', function (done) {
        this.noteService.list('ImUser')
            .then((notes) => {
                expect(notes).toEqual([]);
            })
            .then(done)
            .catch(done.fail);
    });

    it('should be able to return the notes array for a user', function (done) {
        this.noteService.add('ImTitle', 'ImNote', 'ImUser')
            .then(() => this.noteService.list('ImUser'))
            .then((notes) => {
                expect(notes).toEqual([{
                    title: 'ImTitle',
                    content: 'ImNote'
                }]);
            })
            .then(done)
            .catch(done.fail);
    });

    /* update */

    it('should be able to update a note', function (done) {
        this.noteService.add('ImTitle', 'ImNote', 'ImUser')
            .then(() => this.noteService.update('ImTitle', 'ImEditedNote', 'ImUser'))
                .then(() => this.noteService.read())
                .then((notes) => {
                    expect(notes).toEqual({
                        'ImUser': [
                            {
                                title: 'ImTitle',
                                content: 'ImEditedNote'
                            }
                        ]
                    });
                })
                .then(done)
                .catch(done.fail);
    });

    /* remove */

    it('should be able to remove a note', function (done) {
        this.noteService.add('ImTitle', 'ImNote', 'ImUser')
            .then(() => this.noteService.remove('ImTitle', 'ImUser'))
            .then(() => this.noteService.read())
            .then((notes) => {
                expect(notes).toEqual({
                    'ImUser': []
                });
            })
            .then(done)
            .catch(done.fail);
    });

    /* multinotes */

    describe('with many notes added', () => {
        beforeEach(function (done) {
            this.noteService.add('ImTitleA', 'ImNoteA', 'ImUserA')
                .then(() => this.noteService.add('ImTitleB', 'ImNoteB', 'ImUserA'))
                .then(() => this.noteService.add('ImTitleC', 'ImNoteC', 'ImUserB'))
                .then(() => this.noteService.add('ImTitleD', 'ImNoteD', 'ImUserB'))
                .then(done)
                .catch(done.fail);
        });

        /* add */

        it('should be able to add more than one note', function (done) {
            this.noteService.read()
                .then((notes) => {
                    expect(notes).toEqual({
                        'ImUserA': [
                            {
                                title: 'ImTitleA',
                                content: 'ImNoteA'
                            },
                            {
                                title: 'ImTitleB',
                                content: 'ImNoteB'
                            }
                        ],
                        'ImUserB': [
                            {
                                title: 'ImTitleC',
                                content: 'ImNoteC'
                            },
                            {
                                title: 'ImTitleD',
                                content: 'ImNoteD'
                            }
                        ]
                    });
                })
                .then(done)
                .catch(done.fail);
        });

        /* remove */

        it('should be able to remove a particular note', function (done) {
            this.noteService.remove('ImTitleA', 'ImUserA')
                .then(() => this.noteService.remove('ImTitleC', 'ImUserB'))
                .then(() => this.noteService.read())
                .then((notes) => {
                    expect(notes).toEqual({
                        'ImUserA': [
                            {
                                title: 'ImTitleB',
                                content: 'ImNoteB'
                            }
                        ],
                        'ImUserB': [
                            {
                                title: 'ImTitleD',
                                content: 'ImNoteD'
                            }
                        ]
                    });
                })
                .then(done).catch(done.fail);
        });

        /* update */

        it('should be able to update a particular note', function (done) {
            this.noteService.update('ImTitleA', 'ImEditedNoteA', 'ImUserA')
                .then(() => this.noteService.update('ImTitleC', 'ImEditedNoteC', 'ImUserB'))
                .then(() => this.noteService.read())
                .then((notes) => {
                    expect(notes).toEqual({
                        'ImUserA': [
                            {
                                title: 'ImTitleA',
                                content: 'ImEditedNoteA'
                            },
                            {
                                title: 'ImTitleB',
                                content: 'ImNoteB'
                            }
                        ],
                        'ImUserB': [
                            {
                                title: 'ImTitleC',
                                content: 'ImEditedNoteC'
                            },
                            {
                                title: 'ImTitleD',
                                content: 'ImNoteD'
                            }
                        ]
                    });
                })
                .then(done)
                .catch(done.fail);
        });

    });
});

describe('Note Service without proper file', () => {
    beforeEach(function () {
        this.noteService = new NoteService('');
    });

    it('should throw error on reading', function (done) {
        this.noteService.list()
            .then(() => done.fail('Expect to be failed'))
            .catch((err) => {
                expect(err).toEqual(new Error('ENOENT: no such file or directory, open \'\''));
                done();
            });
    });

    it('should throw error on adding', function (done) {
        this.noteService.add('one note', 'sam')
            .then(() => done.fail('Expect to be failed'))
            .catch((err) => {
                expect(err).toEqual(new Error('ENOENT: no such file or directory, open \'\''));
                done();
            });
    });

    it('should throw error on updating', function (done) {
        this.noteService.update(0, 'good note', 'sam')
            .then(() => done.fail('Expect to be failed'))
            .catch((err) => {
                expect(err).toEqual(new Error('ENOENT: no such file or directory, open \'\''));
                done();
            });
    });

    it('should throw error on removing', function (done) {
        this.noteService.remove(0, 'sam')
            .then(() => done.fail('Expect to be failed'))
            .catch((err) => {
                expect(err).toEqual(new Error('ENOENT: no such file or directory, open \'\''));
                done();
            });
    });
});
