const loadEnv = () => require('./flowkeys');
process.env.thisPhone = '19253212132';

const sendMessage = (phone, message, cb=()=>{}) => {
  if(!phone || !message) {
    throw new Error('must supply phone number and message');
    return;
  }
  sms.send(phone, process.env.thisPhone, message, cb);
};

const retrievePhoneNumber = ()=>{'stub'};

const startTransaction = (a, b, cb) => {
  sendMessage(retrievePhoneNumber(a), `${b} is interested in exchanging his work for yours`);
}

module.exports = {
  loadEnv, retrievePhoneNumber, startTransaction
}