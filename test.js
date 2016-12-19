'use strict';

const test = require('tape')
    , fs = require('fs')
    , mt = require('.')

test('filename', function (t) {
  t.plan(2)

  mt('fixtures/dummy.exe', function (err, type) {
    t.ifError(err, 'no error')
    t.is(type, 'i386')
  })
})

test('fd', function (t) {
  t.plan(4)

  fs.open('fixtures/dummy.exe', 'r', function (err, fd) {
    t.ifError(err, 'no open error')

    mt(fd, function (err, type) {
      t.ifError(err, 'no error')
      t.is(type, 'i386')

      fs.close(fd, function (err) {
        t.ifError(err, 'no close error')
      })
    })
  })
})
