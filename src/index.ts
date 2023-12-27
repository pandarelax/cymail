// Import required libraries
import express from 'express';
import bodyParser from 'body-parser';
import cookieparser from 'cookie-parser'
import cors from 'cors';
import compression from 'compression';

// Create an instance of Express
const app = express();

// Middleware
app.use(compression());
app.use(cookieparser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
