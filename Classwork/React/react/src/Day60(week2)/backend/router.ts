import * as express from 'express'
import knex from './init-knex'

export default function () {
    const router = express.Router();

    router.get('/api/links', async (req, res) => {
        try {
            const rawLinks = await knex('links');
            const links = rawLinks.map((link: { tags: string, title: string, url: string }) => {
                link.tags = JSON.parse(link.tags)
                return link
            })
            res.json({ links })
        } catch (err) {
            res.status(500).json(err)
        }
    });

    router.post('/api/links', async (req, res) => {
        try {
            const savedLinks = await knex('links')
            const link = {
                tags: JSON.stringify(req.body.tags),
                title: req.body.title,
                url: req.body.url,
            }
            if (!/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g.test(link.url)) {
                res.status(500).json('Invalid URL input')
            } else if (savedLinks.some((l: { tags: string, title: string, url: string }) => l.url === link.url)) {
                res.status(500).json('URL already exists in the list')
            } else if (!link.title) {
                res.status(500).json('Please Enter a title')
            } else {
                for (let i: number = 0; i < link.tags.length; i++) {
                    const tags = req.body.tags.sort()
                    if (tags[i] === tags[i + 1] && tags[i + 1]) {
                        res.status(500).json('Duplicated tag ' + tags[i])
                        return
                    }
                }
                await knex('links').insert(link)
                res.sendStatus(200)
            }
        } catch (err) {
            res.status(500).json(err)
        }
    })

    return router;
}