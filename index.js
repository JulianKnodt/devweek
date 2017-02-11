const jwt = require('jsonwebtoken');
const fs = require('fs');

const cert = fs.readFileSync('./key.pem');

let token = jwt.sign(JSON.parse('{"iss":"test","sub":"admin@asperasoft.com","aud":"https://api.asperafiles.com/api/v1/oauth2/token","nbf":1483984874,"exp":1516318468}'),
  cert, { algorithm: 'RS256'});

console.log(token);