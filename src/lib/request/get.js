const request = require('request');

const get = (url, cb) => {
  request({ url, json: true }, function (error, response, body) {
    if (error) {
      return cb(err.message, []);
    }
    cb(null, body);
  });
};

module.exports = {
  get,
};
