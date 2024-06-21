// import { app } from './express-setup';


// function run(): void {
//   const port = process.env['PORT'] || 4000;

//   // Start up the Node server
//   const server = app();
//   server.listen(port, () => {
//     console.log(`Node Express server listening on http://localhost:${port}`);
//   });
// }

// run();

const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

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

// Test route for 
app.get('/api/test', async (req, res) => {
  try {
    const query = 'SELECT * FROM locations';
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
