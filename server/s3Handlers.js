const path = require('path');
const s3 = require('s3');
const fs = require('fs');
const stream = require('stream');
const zlib = require('zlib');

var client = s3.createClient({
  multipartUploadThreshold: 20971520,
  multipartUploadSize: 15728640,
  s3Options: {
    accessKeyId: 'AKIAJ2HSSE6BA3O2DCWQ',
    secretAccessKey: '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',
  },
});

const last = arr => arr[arr.length -1];
const rename = (uuid, filename) => {
  let parts = filename.startsWith('.') ? [filename.slice(1)] : filename.split('.');
  return uuid + '.' + (parts.length > 1 ? last(parts) : parts[0]);
}

let zip = stream => zlib.gzip(stream);

let uploadStream = (uuid, filename, stream) => {
  let storageName = rename(uuid, filename);
  let pass = new stream.PassThrough();
  const params = {
    Bucket: 'purse-devweek',
    Key: storageName+'.gz',
    Body: pass,
    Metadata: {
      name: filename
    }
  };
  uploader = client.uploadFile(params);
  uploader.on('error', function(err) {
    console.error('unable to upload:', err.stack);
  });
  uploader.on('end', function() {
    console.log(storageName, 'uploaded');
  });
  return zip(stream).pipe(pass);
}

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

module.exports = {
  uploadFile: uploadFile,
  uploadStream
  downloadBuffer: client.downloadBuffer.bind(client),
  downloadFile: client.downloadFile.bind(client),
  downloadStream: client.downloadStream.bind(client),
  getPublicUrl: s3.getPublicUrlHttp.bind(s3)
};

