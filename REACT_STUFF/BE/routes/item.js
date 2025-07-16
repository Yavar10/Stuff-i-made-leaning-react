const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('GAT HIMMM!')
})
router.post('/items', (req, res) => {
  res.send('PASTT HIMM!')
})
router.delete('/items/:id', (req, res) => {
  res.send('DELLLT HIMMM!')
})     
router.put('/items/:id', (req, res) => {
  res.send('PUTTTT HIMMMM!')
})


module.exports = router

  // middleware that is specific to this router/* 
  
  /* const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  }
  router.use(timeLog)
   */