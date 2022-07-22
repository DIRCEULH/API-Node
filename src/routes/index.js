const express = require('express')
const router = express.Router()

;(async () => {
  const db = require('../db')
  const products = await db.selectProducts()

  // const data = [
  //   {
  //     id: 1,
  //     name: 'Dirceu ',
  //     company: 'FW7 Soluções',
  //     city: 'Blumenau',
  //     age: '40'
  //   },
  //   {
  //     id: 2,
  //     name: 'Pablo',
  //     company: 'FW7 Soluções',
  //     city: 'Blumenau',
  //     age: '-'
  //   },
  //   {
  //     id: 3,
  //     name: 'Rafael',
  //     company: 'FW7 Soluções',
  //     city: 'Blumenau',
  //     age: '-'
  //   },
  //   {
  //     id: 4,
  //     name: 'Henrique',
  //     company: 'FW7 Soluções',
  //     city: 'Blumenau',
  //     age: '-'
  //   },
  //   {
  //     id: 5,
  //     name: 'Roberto',
  //     company: 'FW7 Soluções',
  //     city: 'Blumenau',
  //     age: '-'
  //   },
  //   {
  //     id: 6,
  //     name: 'Anderson',
  //     company: 'FW7 Soluções',
  //     city: 'Blumenau',
  //     age: '-'
  //   }
  // ]

  router.get('/employees', function (req, res, next) {
    res.status(200).send(products)
  })
})()
module.exports = router
