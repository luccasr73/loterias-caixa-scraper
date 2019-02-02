# Loterias caixa scraper

Um módulo nodejs que permite pegar dados dos resultados dos sorteios da Caixa
Econômica Federal Brasileira <br> [English] <br> A nodejs module that allows you
to pick up data from the draws of the Brazilian Caixa Econômica Federal

## Usage

```javascript
const lottery = require('./../index');
// or import
import { resultByNumber } from './../index';
```

### Get last result

```javascript
//get the last megasena result data
lottery
  .resultByNumber('megasena')
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

### Get an especific result by number

```javascript
// to get especific megasena result data by number
lottery
  .resultByNumber('megasena', 2117)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

## CLI

```bash
loterias-caixa r [type]
loterias-caixa r [type] [number]
```

## Dev
#### To edit, lint and build<br>
npm run clean: clean builds<br> 
npm run lint: Check for errors<br> 
npm run build: Generate minified build with source-maps <br>
npm run watch: Generate minified<br>
npm run build with source-maps on save prepare: Clean and build
