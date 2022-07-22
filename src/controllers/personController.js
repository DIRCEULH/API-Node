exports.get = (req, res, next) => {
  res.status(200).send('')
}

exports.getById = (req, res, next) => {
  res.status(200).send('')
}

exports.post = (req, res, next) => {
  res.status(201).send('')
}

exports.put = (req, res, next) => {
  let id = req.params.id
  res.status(201).send(` ${id}`)
}

exports.delete = (req, res, next) => {
  let id = req.params.id
  res.status(200).send(`${id}`)
}
