
const routes = (server) => {
  server.get('categories', (req, res, next) => {
    res.send(['1', 'lalala'])
    next()
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
