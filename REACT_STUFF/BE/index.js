const express = require('express')
const app = express()
const port = 3000
console.log("🔥 File reloaded");
const item=require('./routes/item')
app.use('/api',item);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
