import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import routes from './api/routes';


dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

export { app };
