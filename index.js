'use strict';

const pecoff = require('pe-coff')

module.exports = function peMachineType (fdOrFile, done) {
  pecoff(fdOrFile, pecoff.MACHINE_TYPE, function (err, header) {
    if (err) done(err)
    else done(null, header.machineType)
  })
}
