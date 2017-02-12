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

let retrieveLink = (fileName) => {s3.getPublicUrl('purse-devweek', fileName)};
app.get('/download', (req, res) => {
  let url = retrieveLink(req.query.fileName);
  res.json({url});
});

const port = process.env.PORT || 8080
app.listen(port, function () {
  console.log('Now listening on port:', port)
})
