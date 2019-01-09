const fs = require('fs');
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

module.exports = class NoteService {
    constructor(file) {
        this.file = file;
    }

    async read() {
        try {
            this.notes = JSON.parse(await readFile(this.file, { encoding: 'utf8' }))
            return this.notes;
        } catch (err) {
            throw err;
        }
    }

    async write() {
        try {
            await writeFile(this.file, JSON.stringify(this.notes));
            return this.notes;
        } catch (err) {
            throw err;
        }
    }

    async list(user) {
        try {
            if (typeof user !== 'undefined') {
                await this.read();
                return (typeof this.notes[user] === 'undefined') ? [] : this.notes[user];
            } else {
                return await this.read();
            }
        } catch (err) {
            throw err;
        }    
    }
    
    add(title, note, user) {
        if (typeof this.notes[user] === 'undefined') this.notes[user] = [];
        this.notes[user].push({
            title: title,
            content: note
        });
        return this.write();
    }

    update(title, note, user) {
        for (let i = 0; i < this.notes[user].length; i++) {
            if (this.notes[user][i].title == title) this.notes[user][i].content = note;
        }
        return this.write();
    }

    remove(title, user) {
        for (let i = 0; i < this.notes[user].length; i++) {
            if (this.notes[user][i].title == title) this.notes[user].splice(i, 1)
        }
        return this.write();
    }
}