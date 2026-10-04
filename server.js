import { createServer } from 'node:http'

const port = 5000

const server = createServer((request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (request.method === 'OPTIONS') {
    response.writeHead(204)
    response.end()
    return
  }

  if (request.method !== 'POST' || request.url !== '/api/login') {
    response.writeHead(404, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({ message: 'Route not found.' }))
    return
  }

  let body = ''
  request.on('data', (chunk) => { body += chunk })
  request.on('end', () => {
    const { email, password } = JSON.parse(body || '{}')

    if (email !== 'admin@example.com' || password !== 'password') {
      response.writeHead(401, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify({ message: 'Use admin@example.com and password to sign in.' }))
      return
    }

    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({
      token: 'party-menu-demo-token',
      user: { name: 'Admin User', email }
    }))
  })
})

server.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`)
})
