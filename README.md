# test-dashboard

1. add a simple api to allow cors:

const express = require('express')
const app = express()
const port = 5000

const axios = require('axios')

app.get('/', (req, res) => {
  axios.get(`https://api.open-meteo.com/v1/forecast${req.url}`)
    .then(function (response) {
      res.send(response.data)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

2. yarn install

3. yarn start
