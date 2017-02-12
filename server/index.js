const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const upload = require('multer')()
const app = express()
const s3 = require('./s3Handlers.js')

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../client')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.post('/upload', upload.any(), (req, res) => {
  let files = req.files
  //S3 stuff in here
  res.status(201).end()
})

app.get('/download', (req, res) => {
  let link = retrieveLink = () => {req.body/*something*/}
  let url = 's'//3.retriveBucketUrl
  res.json({url})
})

const port = process.env.PORT || 8080
app.listen(port, function () {
  console.log('Now listening on port:', port)
})
