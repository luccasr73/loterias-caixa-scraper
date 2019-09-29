/* eslint-disable no-console */
const lottery = require('./../index')

lottery.resultByNumber('megasena')
  .then((result) => {
    console.log('megasena result: ', result)
  }).catch((e) => {
    console.log(e)
  })

lottery.resultByNumber('quina')
  .then((result) => {
    console.log('quina result: ', result)
  }).catch((e) => {
    console.log(e)
  })

lottery.resultByNumber('lotofacil')
  .then((result) => {
    console.log('lotofacil result: ', result)
  }).catch((e) => {
    console.log(e)
  })
