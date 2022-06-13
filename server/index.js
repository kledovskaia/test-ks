import { getCities } from './queries.js'
import http from 'http'
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000

const httpServer = http.createServer(async (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  const buffers = [];
  for await (const chunk of request) {
    buffers.push(chunk);
  }
  const data = Buffer.concat(buffers).toString();
  if (data) {
    const requestObject = JSON.parse(data)
    console.log({ requestObject })
  } else {

  }
  response.end();
})

httpServer.listen(port, () => console.log(`App is listening on port ${port}`))