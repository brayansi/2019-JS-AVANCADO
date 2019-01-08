# 2019-JavaScript-avançado


## Formatar numeros com Intl

let formatterUS = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});

console.log(formatterUS.format(myNumber));

$1,285.00
R$ 1.285,00
¥1,285