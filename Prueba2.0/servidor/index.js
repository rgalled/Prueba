import {data} from './data.js';

import express from 'express';
import cors from 'cors';
const app = express()
const port = 3000

let position = [];
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send(data)
})

app.get('/send', (req, res)=>{
  res.send(position)
})

app.post('/send', (req, res) => {
  const newItem = req.body;
  position.push(newItem);
  res.status(201).json(newItem);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})