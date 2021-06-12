const requestHandler = require('../request/get');
const constant = require('../../constant');

const init = async () => {
  console.log('Fetching...');
  const data = await getAppointmentByDistrict().catch((err) => {
    console.log(err && err.message); // handle error
  });
  if (data) {
    printData(data);
  }
};

const getAppointmentByDistrict = async () => {
  return new Promise((resolve, reject) => {
    requestHandler.get(
      `${constant.API.FIND_APPOINTMENT_BY_DISTRICT}?district_id=${constant.DISTRICT_ID}&date=${constant.APPOINTMENT_DATE}`,
      (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      }
    );
  });
};

const printData = (data) => {
  if (data && (data.sessions || []).length) {
    data.sessions = data.sessions.filter((item) => {
      return (
        item.available_capacity > 0 &&
        item.min_age_limit === constant.MIN_AGE_LIMIT
      );
    });

    if ((data.sessions || []).length) {
      data.sessions.forEach((item) => {
        console.log('----------------------------');
        console.log('Name:', item.name);
        console.log('PinCode:', item.pincode);
        // console.log('Available Capacity', item.available_capacity);
        console.log('Available Capacity Dose1', item.available_capacity_dose1);
        console.log('Available Capacity Dose2', item.available_capacity_dose2);
        console.log('Date', constant.APPOINTMENT_DATE);
      });
    } else {
      console.log(
        'No Data Found.. Keep running this.. Be hurry to book appointment when you get the slot '
      );
    }
  } else {
    console.log(
      'No Data Found.. Keep running this.. Be hurry to book appointment when you get the slot '
    );
  }
};

module.exports = {
  init,
};
