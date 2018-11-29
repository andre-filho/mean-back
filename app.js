const express = require('express')


const app = new express()

app.listen(3000, () => {
  console.log('Server is up and running modafocka!')
  console.log('Listening on port 3k')
})

app.get('/', (req, res) => {
  return res.send('eae')
})
