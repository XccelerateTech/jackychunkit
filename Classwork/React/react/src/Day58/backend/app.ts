import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import authClass from './auth';
import router from './router'

const app = express();
const auth = authClass();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(auth.initialize());
app.use(cors());
app.use(router());
app.listen(8080);

