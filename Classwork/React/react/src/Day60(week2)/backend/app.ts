import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import router from './router'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
app.use(router());
app.listen(8080);