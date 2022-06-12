import { getItems } from './queries.js'
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express()
const port = process.env.PORT || 3000

app.get('/', (request, response) => {
  response.json({ info: 'Тестовое задание \"Канал Сервис\"' })
})

app.get('/items', getItems)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})