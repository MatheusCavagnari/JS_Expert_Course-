import http from 'http'
import { InjectHttpInterceotor } from '../index.js'
InjectHttpInterceotor()
function handleRequest(request, response) {
  //response.setHeader('X-Instrumented-By', 'MatheusCavagnari')
  response.end('Hello world')
}

const server = http.createServer(handleRequest)
const port = 3000
server.listen(port, () => console.log('server running at', server.address().port))