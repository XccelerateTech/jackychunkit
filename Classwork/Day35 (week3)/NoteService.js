module.exports = class NoteService {
    constructor(knex) {
        this.knex = knex;
    }

    async add(title, note, user) {
        try {
            const data = await this.knex.select('id').from('users').where('users.username', user);
            if (data.length === 1) {
                return this.knex.insert({
                    title: title,
                    content: note,
                    user_id: data[0].id
                }).into('notes');
            } else {
                throw new Error('Cannot update a note from non-existent user');
            }
        } catch (err) {
            throw err;
        }
    }

    async list(user) {
        try {
            if (typeof user !== 'undefined') {
                const data = await this.knex.select('notes.id', 'title', 'content').from('notes').innerJoin('users', 'notes.user_id', 'users.id').where('users.username', user);
                return data.map(element => ({
                    id: element.id,
                    title: element.title,
                    content: element.content
                }));
            } else {
                const data = await this.knex.select('users.username', 'notes.id', 'title', 'content').from('notes').innerJoin('users', 'notes.user_id', 'users.id');
                const result = {};
                data.forEach(element => {
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
        } catch (err) {
            throw err;
        }
    }

    async update(title, note, user) {
        try {
            const data = await this.knex.select('id').from('users').where('users.username', user);
            if (data.length === 1) {
                return this.knex('notes').where('title', title).update({
                    content: note,
                });
            } else {
                throw new Error('Cannot update a note that doesnt exist');
            }
        } catch (err) {
            throw err;
        }
    }

    async remove(title, user) {
        try {
            const data = await this.knex.select('id').from('users').where('users.username', user);
            if (data.length === 1) {
                return this.knex('notes').where('title', title).del();
            } else {
                throw new Error('No such user')
            }
        } catch (err) {
            throw err;
        }
    }
}
