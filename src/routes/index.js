const express = require('express')
const router = express.Router()
const axios = express.axios

const data = [
  {
    id: 1,
    name: 'Dirceu ',
    company: 'FW7 Soluções'
  },
  {
    id: 2,
    name: 'Pablo',
    company: 'FW7 Soluções'
  },
  {
    id: 3,
    name: 'Rafael',
    company: 'FW7 Soluções'
  },
  {
    id: 4,
    name: 'Henrique',
    company: 'FW7 Soluções'
  },
  {
    id: 5,
    name: 'Roberto',
    company: 'FW7 Soluções'
  },
  {
    id: 6,
    name: 'Anderson',
    company: 'FW7 Soluções'
  }
]

router.get('/employees', function (req, res, next) {
  res.status(200).send(data)
})

module.exports = router
