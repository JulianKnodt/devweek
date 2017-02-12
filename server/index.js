const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const upload = require('multer')();
const app = express();
const s3 = require('./s3Handlers.js');
const fs = require('fs');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.post('/upload', upload.any(), (req, res) => {
  var file = req.files[0];
  var destination = path.join(__dirname, './pendingUploads/') + '/' + file.originalname;
  fs.writeFileSync(destination, file.buffer);
  s3.uploadFile(file.originalname);
});

app.get('/download', (req, res) => {
  let link = retrieveLink = () => {req.body/*something*/};
  let url = //s3.retriveBucketUrl
  res.json({url});
});

const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Now listening on port:', port);
});
