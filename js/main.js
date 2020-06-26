
$(document).ready(function () {

const endpoint = 'https://data.fixer.io/api/latest?access_key=8d34092eb82e5293bec6c3f0cdd15c7c';

const fromCurrency = document.querySelector(".fromInput");
const toCurrency = document.querySelector(".toInput");
var from ;
var to;

document.getElementById('dropDownFrom').onchange = function() {
   from =this.value;
   
};

document.getElementById('dropDownTo').onchange = function() {
   to =this.value;

};


function exchange(){
fetch(endpoint)
.then(response => response.json())
.then(date=>{
	eval("firstAmount= date.rates."+from);
	eval("secondAmount= date.rates."+to);
	toCurrency.value= ((secondAmount/firstAmount)*fromCurrency.value).toFixed(2);
});


}



document.querySelector(".convertButton").addEventListener("click",exchange);
//fromCurrency.addEventListener("input",conversor);


})
