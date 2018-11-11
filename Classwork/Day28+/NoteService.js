const fs = require('fs');

class NoteService {
    constructor(file) {
        this.file = file;
        this.initPromise = null;
        this.init()
    }

    init() {
        if (this.initPromise === null) {
            this.initPromise = new Promise((resolve, reject) => {
                this.read()
                    .then(() => {
                        resolve();
                    })
                    .catch(() => {
                        this.notes = {};
                        this.write()
                            .then(resolve)
                            .catch(reject);
                    });
            });
        }
        return this.initPromise;
    }

    read() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.file, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                }
                try {
                    this.notes = JSON.parse(data);
                } catch (e) {
                    return reject(e);
                }
                return resolve(this.notes);
            });
        });
    }

    write() {
        return new Promise((resolve, reject) => {
            fs.writeFile(this.file, JSON.stringify(this.notes), (err) => {
                if (err) return reject(err);
                resolve(this.notes);
            });
        });
    }

    add(title, note, user) {
        return this.init().then(() => {
            if (typeof this.notes[user] === 'undefined') this.notes[user] = [];
            this.notes[user].push({
                title: title,
                content: note
            });
            return this.write();
        });
    }

    list(user) {
        if (typeof user !== 'undefined') {
            return this.init()
                .then(() => this.read())
                .then(() => {
                    if (typeof this.notes[user] === 'undefined') {
                        return [];
                    } else {
                        return this.notes[user];
                    }
                });
        } else {
            return this.init().then(() => {
                return this.read();
            });
        }
    }

    update(title, note, user) {
        return this.init().then(() => {
            for (let i = 0; i < this.notes[user].length; i++) {
                if (this.notes[user][i].title == title) this.notes[user][i].content = note;
            }
            return this.write();
        });
    }

    remove(title, user) {
        return this.init().then(() => {
            for (let i = 0; i < this.notes[user].length; i++) {
                if (this.notes[user][i].title == title) this.notes[user].splice(i, 1)
            }
            return this.write();
        });
    }
}

module.exports = NoteService;