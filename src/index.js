require('dotenv').config()
var bleno = require('bleno')
var SensortagTemperatureSevice = require('./SensortagTemperatureService')

console.log('bleno - echo');

bleno.on('stateChange', state => {
    console.log('on -> stateChange: ' + state);

    if (state === 'poweredOn') {
        bleno.startAdvertising(process.env.BLE_NAME, [process.env.BLE_UUID]);
      } else {
        bleno.stopAdvertising();
      }
})

bleno.on('advertisingStart', error => {
    console.log('on -> advertisingStart: ' + (error ? 'error ' + error : 'success'));

    if (!error) {
        bleno.setServices([
          SensortagTemperatureSevice
        ]);
      }
})