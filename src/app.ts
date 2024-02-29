import express from 'express';
import { router } from './routes';
import { connect } from './connection/connection';
import cors from 'cors';
import { config } from 'dotenv';
config();

const app = express();

app.use(cors);

app.use(express.json());

app.use(router);

connect();

const port = process.env.PORT;

app.listen(port, () => console.log('server on'));
