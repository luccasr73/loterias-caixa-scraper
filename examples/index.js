/* eslint-disable no-console */
const lottery = require('./../index')
lottery.resultByNumber('quina')
  .then((result) => {
    console.log(result)
  }).catch((e) => {
    console.log(e)
  })

lottery.resultByNumber('lotofacil')
  .then((result) => {
    console.log('lotofacil result: ', result)
  }).catch((e) => {
    console.log(e)
  })
