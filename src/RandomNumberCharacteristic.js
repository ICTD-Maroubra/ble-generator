var util = require('util');

var bleno = require('bleno');

var BlenoCharacteristic = bleno.Characteristic;

var RandomNumberCharacteristic = function() {
  RandomNumberCharacteristic.super_.call(this, {
    uuid: 'ec0e',
    properties: ['read', 'notify'],
    value: null
  });

  this._value = new Buffer(0);
};

util.inherits(RandomNumberCharacteristic, BlenoCharacteristic);

RandomNumberCharacteristic.prototype.onReadRequest = function(offset, callback) {
  console.log('EchoCharacteristic - onReadRequest: value = ' + this._value.toString('hex'));

  callback(this.RESULT_SUCCESS, Math.random().toString());
};

module.exports = RandomNumberCharacteristic;