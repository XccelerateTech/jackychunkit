//library dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const jsonfile = require('jsonfile');
const hb = require('express-handlebars');
const cookieSession = require('cookie-session');
const path = require('path');

//custom dependencies
const config = require('./storage/config.json')[process.env.NODE_ENV || 'development'];
const NoteRouter = require('./NoteRouter');
const NoteService = require('./NoteService');

//set engine to be handlebars
app.engine('handlebars', hb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//setup dependencies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('assets'))
app.use(basicAuth({
    users: jsonfile.readFileSync(path.join(__dirname, config.userlist)),
    challenge: true,
    realm: 'Notes App'
}));
app.use(cookieSession({
    name: 'session',
    secret: 'supersecret',
    maxAge: 24 * 60 * 60 * 1000
}))
app.use('/', (new NoteRouter(new NoteService(path.join(__dirname, config.notes)))).router());

//server hosts
app.listen(config.port, ()=>{
    console.log(`started on port ${config.port}`)
})

