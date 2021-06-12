module.exports = {
  API: {
    GET_STATE: 'https://cdn-api.co-vin.in/api/v2/admin/location/states',
    GET_DISTRICT: 'https://cdn-api.co-vin.in/api/v2/admin/location/districts',
    FIND_APPOINTMENT_BY_DISTRICT: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict`,
  },
  DISTRICT_ID: 770, // 770 is for Ahmedabad Corporation.. use above state, and district api to find your district Id
  APPOINTMENT_DATE: '12-06-2021', // DD-MM-YYYY
  MIN_AGE_LIMIT: 18, // 18 || 45,  18 for 18-44 and 45 for 45+ age
};
