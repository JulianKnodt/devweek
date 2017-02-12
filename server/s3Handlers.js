const s3 = require('s3');

let client = s3.createClient({
  multipartUploadThreshold: 20971520,
  multipartUploadSize: 15728640,
  s3Options: {
    accessKeyId: "AKIAJ2HSSE6BA3O2DCWQ",
    secretAccessKey: "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",
  },
});

module.exports = client;

// var params = {
//   localFile: path.join(__dirname, '../EricsResume.pdf'),
 
//   s3Params: {
//     Bucket: "purse-devweek",
//     Key: "abc.pdf",
//   },
// };

// var uploader = client.uploadFile(params);
// uploader.on('error', function(err) {
//   console.error("unable to upload:", err.stack);
// });
// uploader.on('progress', function() {
//   console.log("progress", uploader.progressMd5Amount,
//             uploader.progressAmount, uploader.progressTotal);
// });
// uploader.on('end', function() {
//   console.log("done uploading");
// });