const express = require('express');

const app = express();

const PORT = 3000;

// Define the logging middleware function
const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    
    // Call next() to pass control to the next middleware function
    next();
};

// Apply the logging middleware to all routes
app.use(requestLogger);

app.get('/', (req, res) => {
    res.send('Welcome to the online store!');
});

app.post('/purchase', (req, res) => {
    res.send('Purchase made!');
});

// Start the server and listen on a specific port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
