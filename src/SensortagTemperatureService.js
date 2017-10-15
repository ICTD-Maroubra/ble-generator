var util = require('util');
var bleno = require('bleno');

var PrimaryService = bleno.PrimaryService;
var BlenoCharacteristic = bleno.Characteristic;

var DataCharacteristic = function() {
  RandomNumberCharacteristic.super_.call(this, {
    uuid: 'f000aa01-0451-4000-b000-000000000000',
    properties: ['read', 'notify'],
    value: null
  });
};

var ConfigCharacteristic = function() {
  RandomNumberCharacteristic.super_.call(this, {
    uuid: 'f000aa02-0451-4000-b000-000000000000',
    properties: ['read', 'write'],
    value: null
  });
};

var PeriodCharacteristic = function() {
  RandomNumberCharacteristic.super_.call(this, {
    uuid: 'f000aa03-0451-4000-b000-000000000000',
    properties: ['read', 'write'],
    value: null
  });
};

util.inherits(DataCharacteristic, BlenoCharacteristic);
util.inherits(ConfigCharacteristic, BlenoCharacteristic);
util.inherits(PeriodCharacteristic, BlenoCharacteristic);

DataCharacteristic.prototype.onReadRequest = function(offset, callback) {
  callback(this.RESULT_SUCCESS, new Buffer());
};

DataCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log(`Data has been subscribed too`);  
  callback(this.RESULT_SUCCESS, new Buffer());
};

ConfigCharacteristic.prototype.onReadRequest = function(offset, callback) {
  callback(this.RESULT_SUCCESS, new Buffer());
};

ConfigCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {
  let n = Math.random().toString()
  console.log(`Config characteristics written too`);

  callback(this.RESULT_SUCCESS, new Buffer(n));
};

PeriodCharacteristic.prototype.onReadRequest = function(offset, callback) {
  callback(this.RESULT_SUCCESS, new Buffer());
};

PeriodCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {
  let n = Math.random().toString()
  console.log(`Config characteristics written too`);

  callback(this.RESULT_SUCCESS, new Buffer(n));
};

var TemperatureService = new TemperatureService({
  uuid: 'f000aa00-0451-4000-b000-000000000000',
  characteristics: [
    DataCharacteristic,
    ConfigCharacteristic,
    PeriodCharacteristic
  ]
})

module.exports = TemperatureService;