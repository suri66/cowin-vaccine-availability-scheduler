NodeJs Scheduler to find vaccine availability within your city

# Steps

1. `Clone the repo`
2. `cd cowin-vaccine-availability-scheduler`
3. `npm i `
4. `npm start`


## Important note:

There are two constants in constant.js file

> `DISTRICT_ID: 770, // 770 is for Ahmedabad 
Corporation..`
  
>  `APPOINTMENT_DATE: '17-05-2021', // DD-MM-YYYY`

You need to change these according to your requirement. Check details below in order to find district id

## Find your district id from cowin

1. Call https://cdn-api.co-vin.in/api/v2/admin/location/states
2. Pick your state id
3. Call https://cdn-api.co-vin.in/api/v2/admin/location/districts/11 (replace 11 with your state id)
4. Copy your district id

## Demo

![Cowin Vaccine Availability](https://github.com/suri66/cowin-vaccine-availability-scheduler/main/images/ezgif-2-927e310ea472.gif?raw=true)


Cowin APIs can be found here https://apisetu.gov.in/public/marketplace/api/cowin