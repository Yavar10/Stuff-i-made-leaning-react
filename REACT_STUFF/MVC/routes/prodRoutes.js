const express=require('express')
const router=express.Router()
const {getProds,delProds,updProds,addProds}=require('../controllers/productController')

router.get('/products',getProds)
router.post('/products',addProds)
router.put('/products/:id',updProds)
router.delete('/products/:id',delProds)

module.exports=router