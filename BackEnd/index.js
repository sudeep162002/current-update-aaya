const express = require('express')
const app = express()
const port = 3030

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("connection sucessful")
})

app.get('/checque', (req, res) => {
    res.send('checque pass you are great!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})