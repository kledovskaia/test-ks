import { getCities } from './queries.js'
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express()
const port = process.env.PORT || 3000

app.get('/', (request, response) => {
  response.send('Backend для тестового задания \"Канал Сервис\"')
})

app.get('/cities', getCities)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})