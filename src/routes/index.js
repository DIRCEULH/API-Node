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

  router.delete('/description', function (req, res) {
    const id = req.query.id
    const pr_descri = req.query.description
    const returnDb = db.updateProducts(id, pr_descri)
    res.status(200).send(returnDb)
  })
})()
module.exports = router
