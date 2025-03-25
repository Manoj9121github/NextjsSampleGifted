const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3002;

// Middleware to parse JSON requests
app.use(cors());
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send(allData);
});

// Global variable to store data
let allData = [];

// Route to handle login
app.post('/login', (req, res) => {
    const { email, password } = req.body; // Get email and password from request body

    // Find user in allData
    const user = allData.find(u => u.email === email && u.password === password);

    if (user) {
        // Successful login
        res.status(200).send('Login successful!');
    } else {
        // Invalid credentials
        res.status(401).send('Invalid email or password');
    }
});



// Route to retrieve all data
app.get('/newdata', (req, res) => {
    res.json(allData);
});




// Route to handle data submission
app.post('/data', (req, res) => {
    const newData = req.body; // Get the data from the request body

    // Log the received data
    console.log('Data received:', newData);

    // Add the new data to the array
    allData.push(newData);

    // Path to data.json
    const dataPath = path.join(__dirname, 'data.json');

    // Write the updated data to data.json
    fs.writeFile(dataPath, JSON.stringify(allData, null, 2), (err) => {
        if (err) {
            console.error('Error writing data file:', err);
            return res.status(500).send('Error writing data file');
        }

        console.log('Data saved successfully:', allData);
        res.status(200).send('Data submitted successfully!');
    });
});

// Load existing data from data.json when server starts
const dataPath = path.join(__dirname, 'data.json');
fs.readFile(dataPath, 'utf8', (err, data) => {
    if (!err) {
        try {
            allData = JSON.parse(data);
            console.log('Existing data loaded:', allData);
        } catch (parseError) {
            console.error('Error parsing existing data:', parseError);
        }
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
