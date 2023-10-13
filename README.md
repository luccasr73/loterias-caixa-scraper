# Loterias caixa scraper

Allows you to pick up data from the lottery of the Brazilian Caixa Econômica Federal

![](https://img.shields.io/npm/v/loterias-caixa-scraper.svg?style=flat-square)
![](https://img.shields.io/npm/dt/loterias-caixa-scraper.svg?style=flat-square)
![](https://img.shields.io/npm/l/loterias-caixa-scraper.svg?style=flat-square)
![](https://img.shields.io/david/luccasr73/loterias-caixa-scraper.svg?style=flat-square)
![](https://img.shields.io/snyk/vulnerabilities/npm/loterias-caixa-scraper.svg?style=flat-square)

# NOTICE

This package doesn't work anymore

## Supported Raffles

- Megasena
- Quina
- Lotofacil(coming soon)

## Install

```
npm i loterias-caixa-scraper --save
```

## Usage

```javascript
const lottery = require('loterias-caixa-scraper')
// or import
import { resultByNumber } from 'loterias-caixa-scraper'
```

### Get last result

```javascript
//get the last megasena result data
lottery
  .resultByNumber('megasena')
  .then((result) => {
    console.log(result)
  })
  .catch((e) => {
    console.log(e)
  })
```

### Get an especific result by number

```javascript
// to get especific megasena result data by number
lottery
  .resultByNumber('megasena', 2117)
  .then((result) => {
    console.log(result)
  })
  .catch((e) => {
    console.log(e)
  });
```

## PAYLOAD SAMPLE


### Mega Sena
```js
{
  numberRaffle: '2196',
  locationRaffle: 'Espaço Loterias Caixa,SÃO PAULO,SP',
  unorNumbers: '56,28,27,01,41,25',
  orderedNumbers: '01,25,27,28,41,56',
  date: '09/10/2019',
  totalCollection: '47.650.095,50',
  isAccumulated: true,
  sena: { winners: '0', prizeByWinner: '0,00' },
  quina: { winners: '58', prizeByWinner: '47.367,07' },
  quadra: { winners: '4166', prizeByWinner: '942,07' },
  nextRaffle:
   { date: '14/10/2019',
     estimatedPrize: '30.000.000,00',
     accumulated: '23.966.764,20' },
  accumulatedMegavirada: '78.486.853,38'
}
```

### Quina
```js
{
  numberRaffle: '5095',
  locationRaffle: 'Espaço Loterias Caixa,SÃO PAULO,SP',
  unorNumbers: '20,49,24,31,39',
  orderedNumbers: '20,24,31,39,49',
  date: '11/10/2019',
  totalCollection: '11.741.050,50',
  isAccumulated: true,
  quina: { winners: '0', prizeByWinner: '0,00' },
  quadra: { winners: '114', prizeByWinner: '5.938,03' },
  terno: { winners: '8388', prizeByWinner: '121,35' },
  duque: { winners: '206346', prizeByWinner: '2,71' },
  nextRaffle:
   { date: '14/10/2019',
     estimatedPrize: '8.000.000,00',
     accumulated: '6.818.572,93' },
  accumulatedSaoJoao: '42.920.270,19'
}
```

### Lotofacil
```js
{
  numberRaffle: '1876',
  locationRaffle: 'SÃO PAULO,SP,Espaço Loterias Caixa',
  unorNumbers: '20,08,03,23,18,11,19,02,01,07,16,24,13,22,04',
  orderedNumbers: '01,02,03,04,07,08,11,13,16,18,19,20,22,23,24',
  date: '11/10/2019',
  totalCollection: '42.351.326,00',
  isAccumulated: false,
  acertos15: { winners: '4', prizeByWinner: '1.311.951,75' },
  acertos14: { winners: '968', prizeByWinner: '1.378,46' },
  acertos13: { winners: '32955', prizeByWinner: '20,00' },
  acertos12: { winners: '407548', prizeByWinner: '8,00' },
  acertos11: { winners: '1942009', prizeByWinner: '4,00' },
  nextRaffle:
   { date: '14/10/2019',
     estimatedPrize: '2.000.000,00',
     accumulated: '8.454.762,05' }
}
```

## CLI

```console
loterias-caixa r [type]
loterias-caixa r [type] [number]
```

## Methods

### _resultByNumber(typeRaffle, numberRaffle)_

**typeRaffle: String,<br> numberRaffle: Number**<br> Return raffle data<br> If
number is undefined, this method will return the last raffle data

## Dev

#### To edit, lint and build

```
npm run clean: Clean builds
npm run lint: Check for errors
npm run build: Generate minified build with source-maps
npm run watch: Generate minified build with source-maps on save
npm run prepare: Clean and build
```

## PRs are appreciated!

## License

[MIT](https://github.com/luccasr73/loterias-caixa-scraper/blob/master/LICENCE)
