const express = require('express');
const path = require('path')
module.exports = class NoteRouter {
    constructor(noteService) {
        this.noteService = noteService;
    }

    router() {
        const router = express.Router();
        //binding methods to the following submethods

        //render for browser request
        router.get('/', this.renderHomepage.bind(this));
        router.get('/notes', this.renderListPage.bind(this));
        router.get('/notes/:id', this.renderNotePage.bind(this));
        router.get('/create', this.renderCreatePage.bind(this));

        //external api for request
        router.get('/api/notes', this.getNote.bind(this));
        router.post('/api/notes', this.createNote.bind(this));
        router.put('/api/notes', this.updateNote.bind(this));
        router.delete('/api/notes/:id', this.deleteNote.bind(this));
        return router;
    }

    renderHomepage(req, res) {
        res.render('index', {
            user: req.auth.user
        });
    }

    renderListPage(req, res) {
        return this.noteService.list(req.auth.user)
            .then(notes => {
                res.render('list', {
                    notes: notes
                });
            })
            .catch(err => res.status(500).json(err));
    }

    renderNotePage(req, res) {
        //store the value of title from /notes/titleName
        let title = req.url.replace(/\/notes\//g, "");
        title = decodeURIComponent(title);
        //if request is main.css or main.js, respond as file but not render
        return (title == 'main.css' || title == 'main.js') ?
            res.sendFile(path.join(__dirname, 'assets', title)) : 
            this.noteService.read(req.auth.user)
                .then(notes => {
                    //only render the page if any matches the title name
                    notes = notes[req.auth.user];
                    for (let i = 0; i < notes.length; i++) {
                        if (notes[i].title == title) {
                            res.render('editor', {
                                user: req.auth.user,
                                title: title,
                                notes: notes[i].content
                            });
                            return;
                        }
                    }
                    //respond with an error if a user try to type a invalid link into a non-existing note
                    res.status(404).send('Note not found')
                })
                .catch(err => res.status(500).json(err));
    }

    renderCreatePage(req, res) {
        return this.noteService.list(req.auth.user)
            .then(notes => {
                let untitleIndex = 1;
                for (let i = 0; i < notes.length; i++) {
                    if (notes[i].title.match(/Untitled \([0-9]+\)/g)) untitleIndex++;
                }
                res.render("creator", {
                    index: untitleIndex
                });
            })
            .catch((err) => res.status(500).json(err));
    }

    getNote(req, res) {
        return this.noteService.list(req.auth.user)
            .then(notes => res.json(notes))
            .catch(err => res.status(500).json(err));
    }

    createNote(req, res) {
        return this.noteService.add(req.body.title, req.body.note, req.auth.user)
            .then(() => this.noteService.list(req.auth.user))
            .then(notes => res.json(notes))
            .catch(err => res.status(500).json(err));
    }

    updateNote(req, res) {
        return this.noteService.update(req.body.title, req.body.note, req.auth.user)
            .then(() => this.noteService.list(req.auth.user))
            .then(notes => res.json(notes))
            .catch(err => res.status(500).json(err));
    }

    deleteNote(req, res) {
        return this.noteService.remove(req.params.id, req.auth.user)
            .then(() => this.noteService.list(req.auth.user))
            .then(notes => res.json(notes))
            .catch(err => res.status(500).json(err));
    }
}