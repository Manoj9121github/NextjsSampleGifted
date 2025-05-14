
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3010;


app.use(cors());
app.use(express.json());


let allData = [];


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


app.get('/', (req, res) => {
    res.send('Welcome to the API! Use /login, /newdata, or /products to interact with it.');
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).send('Email and password are required.');
    }

    const user = allData.find(u => u.email === email);
    
    if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).send('Login successful!');
    } else {
        res.status(401).send('Invalid email or password');
    }
});


app.get('/newdata', (req, res) => {
    res.json(allData);
});


app.post('/data', async (req, res) => {
    const newData = req.body;

    if (!newData || !newData.email || !newData.password) {
        return res.status(400).send('Email and password are required.');
    }
    
    const existingUser = allData.find(user => user.email === newData.email);
    if (existingUser) {
        return res.status(400).send('Email already registered.');
    }

    
    const hashedPassword = await bcrypt.hash(newData.password, 10);
    newData.password = hashedPassword;

    console.log('Data received:', newData);
    allData.push(newData);

    fs.writeFile(dataPath, JSON.stringify(allData, null, 2), (err) => {
        if (err) {
            console.error('Error writing data file:', err);
            return res.status(500).send('Error writing data file');
        }

        console.log('Data saved successfully:', allData);
        res.status(200).send('Data submitted successfully!');
    });
});


app.get('/products', (req, res) => {
    const productsPath = path.join(__dirname, 'products.json');
    fs.readFile(productsPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading products file:', err);
            return res.status(500).send('Error reading products file');
        }
        try {
            const products = JSON.parse(data);
            res.json(products);
        } catch (parseError) {
            console.error('Error parsing products data:', parseError);
            res.status(500).send('Error parsing products data');
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
