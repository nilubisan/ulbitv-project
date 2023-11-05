const fs = require('fs')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800)
  })
  next()
})

server.use(jsonServer.defaults({}))
server.use(jsonServer.bodyParser)

server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
    const { users } = db
    console.log(users)
    const userFromBd = users.find((user) => user.username === username && user.password === password)

    if (userFromBd) {
      return res.json(userFromBd)
    }

    return res.status(403).json({ message: 'AUTH_ERROR' })
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: e.message })
  }
})

server.use(async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH_ERROR' })
  }

  next()
})

server.use(router)

server.listen(8000, () => {
  console.log('server is running on port 8000')
})
