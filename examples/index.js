/* eslint-disable no-console */
const lottery = require('./../index')
lottery.resultByNumber('megasena')
  .then((result) => {
    console.log(result)
  }).catch((e) => {
    console.log(e)
  })
