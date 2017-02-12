var path = require('path');
var s3 = require('s3');
var fs = require('fs');

var client = s3.createClient({
  multipartUploadThreshold: 20971520,
  multipartUploadSize: 15728640,
  s3Options: {
    accessKeyId: 'AKIAJ2HSSE6BA3O2DCWQ',
    secretAccessKey: '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',
  },
});

var uploadFile = (name) => {
  var params = {
    localFile: path.join(__dirname, './pendingUploads') + '/' + name,
   
    s3Params: {
      Bucket: 'purse-devweek',
      Key: name,
    },
  };

  var uploader = client.uploadFile(params);
  uploader.on('error', function(err) {
    console.error('unable to upload:', err.stack);
    fs.unlink(path.join(__dirname, './pendingUploads') + '/' + name, () => {});
  });

  uploader.on('end', function() {
    console.log(name + ' uploaded');
    fs.unlink(path.join(__dirname, './pendingUploads') + '/' + name, () => {});
  });
};

var downladFile = () => {

};

module.exports = {
  uploadFile: uploadFile,
  downloadBuffer: client.downloadBuffer.bind(client),
  downloadFile: client.downloadFile.bind(client),
  downloadStream: client.downloadStream.bind(client),
  getPublicUrl: s3.getPublicUrlHttp.bind(s3)
};

