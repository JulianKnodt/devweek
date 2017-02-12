const jwt = require('jsonwebtoken');
const fs = require('fs');
const request = require('request');

const header = {typ:"JWT",alg:"RS256"}; 
const cert = fs.readFileSync('./key.pem');
const retrieveToken = (who) => {
  const payload = {
    iss: 'SP2weaOMA',
    sub: who,
    aud:"https://api.asperafiles.com/api/v1/oauth2/token",
    nbf:1483984874,
    exp:1516318468
  }
  return jwt.sign(payload, cert, {algorithm: 'RS256', header});
};

const addGrantType = (str) => str + '&grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&scope=user%3Aall';

const fetchAccessToken = (email, cb, org='hackathon1') => {
  let token = addGrantType(retrieveToken(email));
  request.post(`https://api.asperafiles.com/api/v1/oauth2/${org}/token`, {
    json: true,
    header: {
      "content-type": 'application/json'
    },
    auth: {
      user: 'SP2weaOMA',
      pass: 'JPGUcILbQhzW5D4p7-vuIg13VsvrJY0GJuudghdgfj4jumhJMMutIOwtGrvoHNxmDeXWxjaDkVqluamXF5fblFSuWokDDmL1'
    }
  })
  .form({assertion: token}).on('response', r => {
    cb(r.toJSON());
  });
};

fetchAccessToken('julianknodt@gmail.com', console.log);