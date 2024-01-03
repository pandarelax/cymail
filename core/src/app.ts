// Import required libraries
import express from 'express';
import bodyParser from 'body-parser';
import cookieparser from 'cookie-parser'
import cors from 'cors';
import compression from 'compression';
import logger from 'morgan';
import helmet from 'helmet';
import path from 'path';
import indexRouter from './routes/index.js';
import "./db/connection.js";


// Create an instance of Express
const app = express();
const __dirname = path.resolve();
const port: string | 3000 = process.env.PORT || 3000;

// Middleware
app.use(helmet())
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(logger('dev'));
app.use(compression());
app.use(cookieparser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route to indexRouter
app.use('/', indexRouter);

// Start the server
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
