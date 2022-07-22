async function connect() {
  if (global.connection && global.connection.state !== 'disconnected')
    return global.connection

  const mysql = require('mysql2/promise')
  const connection = await mysql.createConnection(
    'mysql://root:fw007@localhost:3306/divero'
  )
  console.log('Conectou no MySQL!')
  global.connection = connection
  return connection
}
connect()

async function selectProducts() {
  const conn = await connect()
  const [rows] = await conn.query('SELECT * FROM tb_produto LIMIT 5')
  return rows
}
module.exports = { selectProducts }
