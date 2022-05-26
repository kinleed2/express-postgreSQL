const express = require('express')
const { Pool, Client } = require('pg')
const app = express()
app.get('/', (req, res) => {
  res.json({ message: 'hello, api' })
})
app.get('/test', function (req, res) {
  res.json({ message: 'hello, test' })
});
app.get('/AllStaff', function(req, res) {
  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'root',
    port: 5432,
  })
  pool.query('SELECT name FROM staff', (error, result) => {
    console.log(result)
    res.json({message : result.rows})
    pool.end()
  })

  // client connection
  // const client = new Client({
  //   user: 'postgres',
  //   host: 'localhost',
  //   database: 'postgres',
  //   password: 'root',
  //   port: 5432,
  // })
  // client.connect()
  // client.query('SELECT name FROM staff', (err, res) => {
  //   console.log(err, res)
  //   client.end()
  // })

});
module.exports = {
  path: '/api',
  handler: app
}
