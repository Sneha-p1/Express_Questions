const express = require('express');
const app = express();

// Variable to track maintenance mode status
let isMaintenanceMode = false;

// Maintenance mode middleware
const maintenanceMode = (req, res, next) => {
    if (isMaintenanceMode) {
        res.status(503).send('Service Unavailable - We are currently undergoing maintenance. Please try again later.');
    } else {
        next();
    }
};

// Apply the maintenance mode middleware to all routes
app.use(maintenanceMode);

// Route to toggle maintenance mode (for demonstration purposes)
app.post('/toggle-maintenance', (req, res) => {
    isMaintenanceMode = !isMaintenanceMode;
    res.send(`Maintenance mode is now ${isMaintenanceMode ? 'ON' : 'OFF'}`);
});

// Example routes
app.get('/', (req, res) => {
    res.send('Welcome to the online store!');
});

app.post('/purchase', (req, res) => {
    res.send('Purchase made!');
});

// Start the server
const PORT = 3000; // Set the port directly
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
