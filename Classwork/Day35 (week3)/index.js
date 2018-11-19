//library dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const hb = require('express-handlebars');
const cookieSession = require('cookie-session');
const knex = require('knex');

//custom dependencies
const knexConfig = require('./config/knexfile').development;
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];
const NoteRouter = require('./NoteRouter');
const NoteService = require('./NoteService');
const AuthChallenger = require('./AuthChallenger');

//set engine to be handlebars
app.engine('handlebars', hb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//setup dependencies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('assets'))
app.use(basicAuth({
    authorizer: AuthChallenger,
    authorizeAsync: true,
    challenge: true,
    realm: 'Notes App'
}));
app.use(cookieSession({
    name: 'session',
    secret: 'supersecret',
    maxAge: 24 * 60 * 60 * 1000
}))
app.use('/', (new NoteRouter(new NoteService(knex(knexConfig)))).router());

//server hosts
app.listen(config.port, ()=>{
    console.log(`started on port ${config.port} at ${new Date()}`)
})

