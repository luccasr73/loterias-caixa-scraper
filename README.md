# Loterias caixa scraper

Um módulo nodejs que permite pegar dados dos resultados dos sorteios da Caixa
Econômica Federal Brasileira <br> [English] <br> A nodejs module that allows you
to pick up data from the lottery of the Brazilian Caixa Econômica Federal

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
