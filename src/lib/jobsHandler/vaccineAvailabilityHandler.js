var requestHandler = require('../request/get');
const constant = require('../../constant');

const init = () => {
  console.log('Fetching...');
  findAppointmentByDistrictId();
};

const findAppointmentByDistrictId = async () => {
  requestHandler.get(
    `${constant.API.FIND_APPOINTMENT_BY_DISTRICT}?district_id=${constant.AHMEDABAD_CORPORATION_ID}&date=16-05-2021`,
    (err, data) => {
      if (err) {
        // handle error
        console.log(err);
      }
      processData(data);
    }
  );
};

const processData = (data) => {
  if (data && (data.sessions || []).length) {
    console.log('----------------------------');
    data.sessions.forEach((item) => {
      if (item.min_age_limit === 18) {
        console.log('Name:', item.name);
        console.log('PinCode:', item.pincode);
        console.log('Available Capacity', item.available_capacity);
      }
    });
  } else {
    console.log('No Data Found');
  }
};

module.exports = {
  init,
};
