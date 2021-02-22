const jwt = require('jsonwebtoken');

const signToken = async (payload, privatekey) => {
  const promise = new Promise((resolve, reject) => {
    jwt.sign(payload, privatekey, { expiresIn: 3600 }, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });

  return promise;
};

module.exports = signToken;
