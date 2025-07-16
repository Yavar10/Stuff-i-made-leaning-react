const express = require('express')
const db=require('./config/db')
const app = express()
const port =process.env.PORT

db();

const prodRoutes=require('./routes/prodRoutes')
app.use(express.json())
app.use('/api',prodRoutes)

app.get('/', (req, res) => {
  res.send('nhi batauga!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
