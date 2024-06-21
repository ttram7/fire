const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { Pool } = require('pg');

//install express and set the port
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

//Pool creation for access to the DB
const pool = new Pool({
  host: 'localhost',
  database: 'fire_db',
  port: 5432,
});

// Route for access to the DB data
app.get('/api/test', async (req, res) => {
  try {
    const query = 'SELECT * FROM locations';
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to fetch data from OpenDataSoft API
app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-united-states-of-america-place/records?limit=20');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
