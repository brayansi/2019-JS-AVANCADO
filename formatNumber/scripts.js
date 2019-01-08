let myNumber = 1285;

let formatterUS = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});

let formatterBR = new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL'
});

let formatterJP = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'JPY'
});


console.log(formatterUS.format(myNumber));
console.log(formatterBR.format(myNumber));
console.log(formatterJP.format(myNumber));