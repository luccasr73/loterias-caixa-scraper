const cheerio = require('cheerio')
const rp = require('request-promise')

Object.defineProperty(exports, '__esModule', {
  value: true
})

function insertCommaAfterTwoChars (str) {
  return str.replace(/\B(?=(\d{2})+(?!\d))/g, ',')
}

function selectArrayInterval (arr, initial, final) {
  let arrAux = []
  for (let i = initial - 1; i <= final - 1; i++) {
    arrAux.push(arr[i])
  }
  return arrAux
}

async function mountJSON (html, type) {
  // eslint-disable-next-line prefer-const
  let $ = cheerio.load(html)
  let arrData
  let result

  if ($('body').text().split('|').length < 4) {
    return Promise.resolve(JSON.stringify({ err: 'Resultado não disponivel!', errCode: 1 }))
  }

  try {
    arrData = $('body').text().split('|')
  } catch (e) {
    return Promise.reject(JSON.stringify(e))
  }

  if (type === 'megasena') {
    try {
      result = {
        numberRaffle: arrData[0],
        locationRaffle: `${arrData[14]},${arrData[12]},${arrData[13]}`,
        unorNumbers: insertCommaAfterTwoChars(arrData[2]),
        orderedNumbers: insertCommaAfterTwoChars(arrData[20]),
        date: arrData[11],
        totalCollection: arrData[24],
        // eslint-disable-next-line radix
        isAccumulated: parseInt(arrData[3]) === 0,
        sena: {
          winers: arrData[3],
          prizeByWinner: arrData[4]
        },
        quina: {
          winers: arrData[5],
          prizeByWinner: arrData[6]
        },
        quadra: {
          winers: arrData[7],
          prizeByWinner: arrData[8]
        },
        nextRaffle: {
          date: arrData[22],
          estimatedPrize: arrData[21],
          accumulated: arrData[1]
        },
        accumulatedMegavirada: arrData[23]
        // eslint-disable-next-line semi
      }
    } catch (e) {
      return Promise.reject(JSON.stringify(e))
    }
  }
  if (type === 'quina') {
    try {
      console.log(arrData)
      result = {
        numberRaffle: arrData[0],
        locationRaffle: `${arrData[4]},${arrData[2]},${arrData[3]}`,
        unorNumbers: selectArrayInterval(insertCommaAfterTwoChars(arrData[14]).split(','), 1, 5).join(','),
        orderedNumbers: selectArrayInterval(insertCommaAfterTwoChars(arrData[14]).split(','), 6, 10).join(','),
        date: arrData[16],
        totalCollection: arrData[20],
        // eslint-disable-next-line radix
        isAccumulated: parseInt(arrData[6]) === 0,
        quina: {
          winers: arrData[6],
          prizeByWinner: arrData[7]
        },
        quadra: {
          winers: arrData[8],
          prizeByWinner: arrData[9]
        },
        terno: {
          winers: arrData[10],
          prizeByWinner: arrData[11]
        },
        duque: {
          winers: arrData[23],
          prizeByWinner: arrData[22]
        },
        nextRaffle: {
          date: arrData[18],
          estimatedPrize: arrData[17],
          accumulated: arrData[13]
        },
        accumulatedSaoJoao: arrData[21]
        // eslint-disable-next-line semi
      }
    } catch (e) {
      return Promise.reject(JSON.stringify(e))
    }
  }
  return Promise.resolve(result)
  // )
}

// eslint-disable-next-line func-names
exports.resultByNumber = async function (type, number) {
  let html
  if (number === undefined) {
    try {
      html = await rp(`http://www1.caixa.gov.br/loterias/loterias/${type}/${type}_pesquisa_new.asp`, {
        jar: true
        // encoding: 'utf8'
      })
      return await mountJSON(html, type)
    } catch (err) {
      return Promise.reject(JSON.stringify(err.error))
    }
  } else {
    try {
      html = await rp(`http://www1.caixa.gov.br/loterias/loterias/${type}/${type}_pesquisa_new.asp?submeteu=sim&opcao=concurso&txtConcurso=${number}`, {
        jar: true
        // encoding: 'utf8'
      })
      return await mountJSON(html, type)
    } catch (err) {
      return Promise.reject(JSON.stringify(err.error))
    }
  }
  // eslint-disable-next-line semi
}
