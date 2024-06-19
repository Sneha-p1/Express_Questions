const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Validation Middleware
const validateUserInput = (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }
    next();
};

// Registration Middleware
const processRegistration = (req, res) => {
    const { email } = req.body;
    const newUser = { id: Date.now(), email };

    // Respond with the created user
    res.status(201).json({ message: 'User registered successfully', user: newUser });
};

// Registration Route with chained middleware
app.post('/register', validateUserInput, processRegistration);

// Start the server and listen on a specific port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
