# Loterias caixa scraper

Um módulo nodejs que permite pegar dados dos resultados dos sorteios da Caixa Econômica Federal Brasileira
[English]
A nodejs module that allows you to pick up data from the draws of the Brazilian Caixa Econômica Federal


# Usage/uso

    const  lottery  =  require('./../index')
    lottery.resultByNumber('megasena')
	    .then((result) => {
		    console.log(result)
		 })
	    .catch((e) => {
		    console.log(e)
		 })
