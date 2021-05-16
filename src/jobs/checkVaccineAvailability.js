const schedule = require('node-schedule');
const vaccineAvailabilityHandler = require('../lib/jobsHandler/vaccineAvailabilityHandler');

function init() {
  schedule.scheduleJob('* * * * * *', vaccineAvailabilityHandler.init);
}

module.exports = {
  init,
};
