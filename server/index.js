const express = require('express');
const PORT = 4000;
const app = express();
const cors = require('cors')
const fs = require('fs')

const kidsListPath = './MockData/kidsList.json';

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/kids', (req, res)=>{
  fs.readFile(kidsListPath,"utf8",(err, data)=>{
    if (err) throw err;
    const json = JSON.parse(data)
    const jsonToSend = {total: json.length, kids: json}

    res.send(jsonToSend)
  })
})

app.post('/kids', (req, res)=>{
  fs.readFile(kidsListPath, "utf8",(err, data)=>{
    if (err) throw err
    const json = JSON.parse(data)
    const incomeData = {id: +json[json.length-1].id + 1, ...req.body}
    const jsonToWrite = [...json, incomeData]
    fs.writeFile(kidsListPath, JSON.stringify(jsonToWrite), (err) => {
      if (err) throw err
      console.log('The "data to append" was appended to file!');
      res.send({data: incomeData, status_code: 1})
    })
  })


})

app.listen(PORT, ()=>{
  console.log(`Server had started at http://localhost:${PORT} port`)})