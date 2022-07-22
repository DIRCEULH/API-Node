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
})()
module.exports = router
