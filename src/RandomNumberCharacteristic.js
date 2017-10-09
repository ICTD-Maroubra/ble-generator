var util = require('util');

var bleno = require('bleno');

var BlenoCharacteristic = bleno.Characteristic;

var RandomNumberCharacteristic = function() {
  RandomNumberCharacteristic.super_.call(this, {
    uuid: 'ec0e',
    properties: ['read', 'notify'],
    value: null
  });
};

util.inherits(RandomNumberCharacteristic, BlenoCharacteristic);

RandomNumberCharacteristic.prototype.onReadRequest = function(offset, callback) {
  let n = Math.random().toString()
  console.log(`RandomNumberCharacteristic - onReadRequest: value = ${n.toString('hex')} (${n})`);

  callback(this.RESULT_SUCCESS, new Buffer(n));
};

module.exports = RandomNumberCharacteristic;