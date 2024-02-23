import express from 'express';
import { router } from './routes';
import { connect } from './connection/connection'; 


const app = express();

app.use(express.json());

app.use(router);

connect();

app.listen(5000, () => console.log('server on'));