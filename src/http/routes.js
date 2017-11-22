
const db = require('../services/mysql')

const routes = (server) => {
  server.get('categories', (req, res, next) => {
    console.log()
    db.categories()
      .all()
      .then(categories => {
        res.send(categories)
        next()
      })
      .catch(error => {
        res.send(error)
        next()
      })
  })

  server.post('categories', (req, res, next) => {
    const { name } = req.params
    res.send(name)
    next()
  })

  // server.put('categories', (req, res, next) => {
  //   res.send()
  //   next()
  // })
  // server.delete('categories', (req, res, next) => {
  //   res.send()
  //   next()
  // })
  server.get('/', (req, res, next) => {
    res.send('Enjoy the silence!')
    next()
  })
}

module.exports = routes
