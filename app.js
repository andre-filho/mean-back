const express = require('express')

const app = express()

app.get('/api/posts', (req, res) => {
  const posts = [
    { id: 1, title: 'ajsdaojfa', context: 'jaidojfia' },
    { id: 2, title: 'allah', context: 'jadsafasdfidojfia' },
    { id: 3, title: 'cuzine', context: 'jaidojfiadasfdfadsfdsasfa' }
  ]

  res.json({
    message: 'Success on getting posts',
    posts
  }).status(200)
})

app.get('/', (res) => {
  return res.send('modafocka')
})

module.exports = app
