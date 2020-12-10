const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([
    {
        name: 'Ray',
        email: 'example@gmail.com'
    },
    {
        name: 'Matt',
        email: 'matt@gmail.com'
    },
    {
        name: 'Yo',
        email: 'whatareyoulooking@gmail.com'
    },
    {
        name: 'test'
    }
]))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
