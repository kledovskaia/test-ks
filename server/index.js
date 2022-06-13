import { getCities } from './queries.js'
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000

const app = express();
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', (async (request, response) => {
  const params = request.body
  let result;
  if (params && Object.entries(params).some(([_, value]) => value)) {
    result = await getCities(params)
  } else {
    result = await getCities()
  }
  response.json(result);
}))

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})