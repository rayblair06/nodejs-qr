import express from 'express';

import baseRouter from './base';


const app = express();

app.use('/', baseRouter);

export default app;
