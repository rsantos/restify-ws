
const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'volkks10',
  database: 'restful_ws'
})

const categoryModule = require('./categories')({ connection })

module.exports = {
  categories: () => categoryModule
}
