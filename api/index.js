const express = require('express')
const { Pool, Client } = require('pg')
const app = express()
app.get('/', (req, res) => {
  res.json({ message: 'hello, api' })
})
app.get('/test', function (req, res) {
  res.json({ message: 'hello, test' })
});

// pool connection
app.get('/AllStaff', function (req, res) {
  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'root',
    port: 5432,
  })
  pool.query('SELECT name FROM staff', (error, result) => {
    console.log(result)
    res.json({ message: result.rows })
    // end when you want
    //pool.end()
  })
});

// client connection
var client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'root',
  port: 5432,
})

client.connect();

var query = 'SELECT name FROM staff'

app.get('/AllStaffFromClient', (req, res) => {

  client.query(query, (error, result) => {
    console.log(result);
    res.json({ message: result.rows })
    // end when you want
    //client.end();
  });
});

module.exports = {
  path: '/api',
  handler: app
}
