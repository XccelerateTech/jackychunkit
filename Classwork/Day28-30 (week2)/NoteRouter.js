const express = require('express');
const path = require('path');

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
        return res.render('index', {
            user: req.auth.user
        });
    }

    async renderListPage(req, res) {
        try {
            const notes = await this.noteService.list(req.auth.user);
            return res.render('list', {
                notes: notes
            });
        } catch (err) {
            throw res.status(500).json(err)
        }
    }

    async renderNotePage(req, res) {
        //store the value of title from /notes/titleName
        let title = req.url.replace(/\/notes\//g, "");
        title = decodeURIComponent(title);
        //if request is main.css or main.js, respond as file but not render
        if (title == 'main.css' || title == 'main.js') {
            return res.sendFile(path.join(__dirname, 'assets', title))
        } else {
            //only render the page if any matches the title name
            try {
                let notes = await this.noteService.read(req.auth.user);
                notes = notes[req.auth.user];
                for (let i = 0; i < notes.length; i++) {
                    if (notes[i].title == title) {
                        return res.render('editor', {
                            user: req.auth.user,
                            title: title,
                            notes: notes[i].content
                        });
                    }
                }
                //respond with an error if a user try to type a invalid link into a non-existing note
                throw res.status(404).send('Note not found')
            } catch (err) {
                throw res.status(500).json(err)
            }
        }
    }


    async renderCreatePage(req, res) {
        try {
            const notes = this.noteService.list(req.auth.user)
            let untitleIndex = 1;
            for (let i = 0; i < notes.length; i++) {
                if (notes[i].title.match(/Untitled \([0-9]+\)/g)) untitleIndex++;
            }
            return res.render("creator", {
                index: untitleIndex
            });
        } catch (err) {
            throw res.status(500).json(err)
        }
    }

    async getNote(req, res) {
        try {
            const notes = await this.noteService.list(req.auth.user)
            return res.json(notes);
        } catch (err) {
            throw res.status(500).json(err)
        }
    }

    async createNote(req, res) {
        try {
            await this.noteService.add(req.body.title, req.body.note, req.auth.user);
            const notes = await this.noteService.list(req.auth.user);
            return res.json(notes);
        } catch (err) {
            throw res.status(500).json(err)
        }
    }

    async updateNote(req, res) {
        try {
            await this.noteService.update(req.body.title, req.body.note, req.auth.user)
            const notes = await this.noteService.list(req.auth.user);
            return res.json(notes);
        } catch (err) {
            throw res.status(500).json(err)
        }
    }

    async deleteNote(req, res) {
        try {
            await this.noteService.remove(req.params.id, req.auth.user)
            const notes = await this.noteService.list(req.auth.user);
            return res.json(notes);
        } catch (err) {
            throw res.status(500).json(err)
        }
    }
}