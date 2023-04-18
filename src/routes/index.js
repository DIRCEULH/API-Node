const express = require('express')
const router = express.Router()

;(async () => {
  const db = require('../db')

  router.get('/employees', async function (req, res, next) {
    const products = await db.selectProducts()
    res.status(200).send(products)
  })
 
  router.delete('/product', function (req, res, next) {
    const id = req.query.id
    const returnDb = db.deleteProducts(id)
    res.status(200).send(returnDb + '-' + id)
  })

  router.put('/description/:id/:description', function (req, res) {
    const id = req.params.id
    const pr_descri = req.params.description
    const returnDb = db.updateProducts(id, pr_descri)
    res.status(200).send(returnDb)
  })

  router.post('/insertProduct/:quanty/:description', function (req, res) {
    const { quanty, description } = req.params
    const returnDb = db.insertProducts(quanty, description)
    res.status(200).send(returnDb)
  })
})()
module.exports = router
