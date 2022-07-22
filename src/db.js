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
  const [rows] = await conn.query(
    'SELECT * FROM tb_produto WHERE pr_codpro < 600'
  )
  return rows
}

async function deleteProducts(pr_codpro) {
  const connd = await connect()
  const [rows1] = await connd.query(
    `delete  from tb_ped_item WHERE pi_codpro =  ${pr_codpro}`
  )
  const [rows3] = await connd.query(
    `DELETE FROM tb_pro_cors_gupo_item WHERE cg_codpro = ${pr_codpro}`
  )
  const [rows2] = await connd.query(
    `DELETE FROM tb_produto WHERE pr_codpro = ${pr_codpro}`
  )

  return 'Deletado com sucesso.' + rows1
}
module.exports = { selectProducts, deleteProducts }
