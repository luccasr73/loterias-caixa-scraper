'use strict';

let mountJSON = (() => {
  var _ref = _asyncToGenerator(function* (html, type) {
    // eslint-disable-next-line prefer-const
    let $ = cheerio.load(html);
    let arrData;
    let result;

    if ($('body').text().split('|').length < 4) {
      return Promise.resolve(JSON.stringify({ err: 'Resultado não disponivel!', errCode: 1 }));
    }

    if (type === 'megasena') {
      try {
        arrData = $('body').text().split('|');
        result = {
          numberRaffle: arrData[0],
          locationRaffle: `${arrData[14]},${arrData[12]},${arrData[13]}`,
          unorNumbers: insertCommaAfterTwoChars(arrData[2]),
          orderedNumbers: insertCommaAfterTwoChars(arrData[20]),
          date: arrData[11],
          totalCollection: arrData[24],
          // eslint-disable-next-line radix
          isAccumulated: parseInt(arrData[3]) > 0,
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
        };
      } catch (e) {
        return Promise.reject(JSON.stringify(e));
      }
    }
    return Promise.resolve(JSON.stringify(result));
    // )
  });

  return function mountJSON(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

// eslint-disable-next-line func-names


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const cheerio = require('cheerio');
const rp = require('request-promise');

Object.defineProperty(exports, '__esModule', {
  value: true
});

function insertCommaAfterTwoChars(str) {
  return str.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
}

exports.resultByNumber = (() => {
  var _ref2 = _asyncToGenerator(function* (type, number) {
    let html;
    if (number === undefined) {
      try {
        html = yield rp(`http://www1.caixa.gov.br/loterias/loterias/${type}/${type}_pesquisa_new.asp`, {
          jar: true,
          encoding: 'utf8'
        });
        return yield mountJSON(html, type);
      } catch (err) {
        return Promise.reject(JSON.stringify(err.error));
      }
    } else {
      try {
        html = yield rp(`http://www1.caixa.gov.br/loterias/loterias/${type}/${type}_pesquisa_new.asp?submeteu=sim&opcao=concurso&txtConcurso=${number}`, {
          jar: true,
          encoding: 'utf8'
        });
        return yield mountJSON(html, type);
      } catch (err) {
        return Promise.reject(JSON.stringify(err.error));
      }
    }
    // eslint-disable-next-line semi
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})();