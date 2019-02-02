#!/usr/bin/env node
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* eslint-disable no-console */

const commander = require('commander');
const lottery = require('../lib/index');

commander.version('0.0.1', '-v, --version').description('A module for get results of brazilian Caixa lotteries.');

commander.command('result [type] [number]').alias('r').description('Get result of raffle by number, if number is empty get the last').action((() => {
  var _ref = _asyncToGenerator(function* (type, number) {
    // console.log(type, number);
    try {
      const result = yield lottery.resultByNumber(type.toString(), number);
      console.info(JSON.parse(result));
    } catch (error) {
      console.error(error);
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());
commander.parse(process.argv);