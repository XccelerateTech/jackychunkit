import axios from 'axios';
import * as express from 'express'
import * as jwt from 'jwt-simple';
import authClass from './auth';
import config from './config';
import groups from './groups';
import users from './users';

export default function () {
    const auth = authClass();
    const router = express.Router();

    router.get('/api/groups', auth.authenticate(), (req, res) => res.json(groups));

    router.get('/api/users', auth.authenticate(), (req, res) => res.json(users));

    router.post("/api/signup", (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        // insert new user to users
        const user = {
            email,
            id: users.length,
            name,
            password
        }

        users.push(user);
        const payload = {
            id: user.id,
            username: user.name
        };
        const token = jwt.encode(payload, config.jwtSecret);
        res.json({ token });
    });

    router.post("/api/login", (req, res) => {
        const email = req.body.username;
        const password = req.body.password;
        const user = users.find(u => {
            return u.email === email && u.password === password
        });
        if (!user) {
            res.sendStatus(401)
        } else {
            const payload = {
                id: user.id,
                username: user.name
            };
            const token = jwt.encode(payload, config.jwtSecret);
            res.json({ token });
        }
    });

    router.post("/api/login/facebook", async (req, res) => {
        if (req.body.access_token) {
            const accessToken = req.body.access_token;
            try {
                const response = await axios.get(`https://graph.facebook.com/me?access_token=${accessToken}`)
                if (!response.data.error) {
                    const user = {
                        email: "placeholder@gmail.com", // response.data.email
                        fbtoken: accessToken,
                        id: users.length,
                        name: response.data.name, // "Facebook User",
                        password: "placeholder"
                    }
                    users.push(user)

                    const payload = {
                        id: user.id
                    };

                    const token = jwt.encode(payload, config.jwtSecret);
                    res.json({ token });
                } else {
                    res.status(401).end();
                }
            } catch (err) {
                res.status(401).end();
            };
        } else {
            res.status(401).end();
        }
    });

    return router;
}