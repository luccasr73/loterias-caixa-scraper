#!/usr/bin/env node

/* eslint-disable no-console */

const commander = require('commander')
const lottery = require('./index')

commander
  .version('0.1.0', '-v, --version')
  .description('A module for get results of brazilian Caixa\'s lotteries.')
  .usage('\n loterias-caixa r [type] for get the last raffle of this type \n loterias-caixa r [type] [number] get data of an especified raffle by number')

commander.command('result <type> [number]')
  .alias('r')
  .description('Get result of raffle by number, if number is empty get the last')
  .action(async (type, number, cmd) => {
    // console.log(type, number, cmd['onlynumbers'])
    try {
      const result = await lottery.resultByNumber(type.toString(), number)
      console.info(result)
    } catch (error) {
      console.error(error)
    }
  })
commander.parse(process.argv)
