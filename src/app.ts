import express from 'express';
import { router } from './routes';
import { connect } from './connection/connection'; 

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use(router);

connect();

app.listen(port, () => console.log('server on'));