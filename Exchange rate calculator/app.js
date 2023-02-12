const currencyOne = document.getElementById('currency-one')
const currencyTWo = document.getElementById('currency-two')
const amountOne = document.getElementById('amount-one')
const amountTwo = document.getElementById('amount-two')

const currencyExchange = async (currencyOne,currencyTWo)=>{
    let response = await fetch(`https://v6.exchangerate-api.com/v6/b3a8fb77eb6792f2cbd23482/latest/${currencyOne}`)
    let data = await response.json()
    amountTwo.value = data.conversion_rates[currencyTWo] * amountOne.value
}


function calculate(){
    currencyExchange(currencyOne.value, currencyTWo.value)
}

currencyOne.addEventListener('change', calculate)
currencyTWo.addEventListener('change',calculate)
amountOne.addEventListener('input',calculate)

swap.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTWo.value;
    currencyTWo.value = temp;
    calculate();
});