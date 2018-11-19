module.exports = class NoteService {
    constructor(knex) {
        this.knex = knex;
    }

    async add(title, note, user) {
        const rows = await this.knex.select('id').from('users').where('users.username', user);
        if (rows.length === 1) {
            return this.knex.insert({
                title: title,
                content: note,
                user_id: rows[0].id
            }).into('notes');
        } else {
            throw new Error('Cannot update a note from non-existent user');
        }
    }

    async list(user) {
        if (typeof user !== 'undefined') {
            const rows = await this.knex.select('notes.id', 'title', 'content').from('notes').innerJoin('users', 'notes.user_id', 'users.id').where('users.username', user);
            return rows.map(element => ({
                id: element.id,
                title: element.title,
                content: element.content
            }));
        } else {
            const rows = await this.knex.select('users.username', 'notes.id', 'title', 'content').from('notes').innerJoin('users', 'notes.user_id', 'users.id');
            const result = {};
            rows.forEach(element => {
                (typeof result[element.username] === 'undefined') ?
                    result[element.username] = [] :
                    result[element.username].push({
                        id: element.id,
                        title: element.title,
                        content: element.content
                    });
            });
            return result;
        }
    }

    async update(title, note, user) {
        const rows = await this.knex.select('id').from('users').where('users.username', user);
        if (rows.length === 1) {
            return this.knex('notes').where('title', title).update({
                content: note,
            });
        } else {
            throw new Error('Cannot update a note that doesnt exist');
        }

    }

    async remove(title, user) {
        const rows = await this.knex.select('id').from('users').where('users.username', user);
        if (rows.length === 1) {
            return this.knex('notes').where('title', title).del();
        } else {
            throw new Error('No such user')
        }
    }
}
