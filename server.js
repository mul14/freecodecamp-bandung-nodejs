const express = require('express')
const app = express()
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test'
})

app.get('/', (req, res) => {
  const message = req.query.msg || 'Hello World!'

  res.json({
    normal: message,
    uppercase: message.toUpperCase(),
    lowercase: message.toLowerCase(),
  })
})

app.get('/mysql', (req, res) => {
  const sql = 'SELECT * FROM `users`'
  connection.query(sql, (err, results, fields) => {
    res.json({results})
  })
})

app.listen(3000, () => console.log('Listening on http://localhost:3000/'))
