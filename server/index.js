require('dotenv').config()
const express = require('express');
const sequelize = require('./db');
const models = require('./src/models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./src/routes/index')
const errorHandler = require('./src/middleware/errorHandlingMiddleware')
const path = require('path')
const authMiddleware = require('./src/middleware/authMiddleware')

const PORT = process.env.PORT || 4000;

const app = express();

// const fs = require('fs')

app.use(cors())
app.use(express.json())
app.use('/api/static', authMiddleware, express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// Error Handler
app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => {
      console.log(`Server had started at http://localhost:${PORT} port`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()

// app.get('/', (req, res) => {
//   res.send('Hello')
// })
//
// app.get('/kids', (req, res)=>{
//   fs.readFile(kidsListPath,"utf8",(err, data)=>{
//     if (err) throw err;
//     const json = JSON.parse(data)
//     const jsonToSend = {total: json.length, kids: json}
//
//     res.send(jsonToSend)
//   })
// })
//
// app.post('/kids', (req, res)=>{
//   fs.readFile(kidsListPath, "utf8",(err, data)=>{
//     if (err) throw err
//     const json = JSON.parse(data)
//     const incomeData = {id: +json[json.length-1].id + 1, ...req.body}
//     const jsonToWrite = [...json, incomeData]
//     fs.writeFile(kidsListPath, JSON.stringify(jsonToWrite), (err) => {
//       if (err) throw err
//       console.log('The "data to append" was appended to file!');
//       res.send({data: incomeData, status_code: 1})
//     })
//   })
//
//
// })
//
// function adoptJSON(){
//   fs.readFile('./mockData/newData.json', "utf8", (err, data)=>{
//     if (err) throw err
//     const json = JSON.parse(data)
//     json.map((el)=>{
//       if (el.name) {
//         el.firstName = el.name.split(' ')[1]
//         el.lastName = el.name.split(' ')[0]
//       }
//       el = {... el.firstName, ...el.lastName, ...el}
//     })
//     fs.writeFile('./mockData/newData.json', JSON.stringify(json), (err) => {
//       if (err) throw err
//       console.log('All OK');
//     })
//   })
// }

// adoptJSON()

