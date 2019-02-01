#!/usr/bin/env node

/* eslint-disable no-console */

const commander = require('commander');
const lottery = require('./lib/index');

commander
  .version('0.0.1', '-v, --version')
  .description('A module for get results of brazilian Caixa lotteries.');

commander.command('result [type] [number]')
  .alias('r')
  .description('Get result of raffle by number, if number is empty get the last')
  .action(async (type, number) => {
    // console.log(type, number);
    try {
      const result = await lottery.resultByNumber(type.toString(), number);
      console.info(JSON.parse(result));
    } catch (error) {
      console.error(error);
    }
  });
commander.parse(process.argv);
