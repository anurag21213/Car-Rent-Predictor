const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const cors = require('cors'); // Import cors
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const mindsdbApiUrl = process.env.MINDSDB_API_URL;

// Use morgan middleware for logging requests
app.use(morgan('dev'));

// Use cors middleware to allow requests from all origins
app.use(cors());

app.use(express.json());

// POST endpoint for predicting cloth sizes
app.post('/predict', async (req, res) => {
    try {
        console.log(req.body)
        const { fuel,mileage,transmission,year } = req.body;

        const response = await axios.post(mindsdbApiUrl, {
            data: [
                { fuel,mileage,transmission,year }
            ]
        });

        console.log('Response:', response.data);
        res.send(response.data)

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
