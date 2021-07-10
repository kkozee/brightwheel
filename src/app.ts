import express, { Express } from 'express';
import router from './router';

require('dotenv').config()

const app: Express = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json()); 
app.use(router)

app.listen(3000)

console.log('Server running on port 3000')