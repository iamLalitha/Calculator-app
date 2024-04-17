let calculation= localStorage.getItem('calculation') || '';

updateResult();

function updateCalculation(inputValue){
  calculation += inputValue;
  localStorage.setItem('calculation', calculation);
  updateResult();
}

function updateResult(){

  const displayElement = document.querySelector('.js-display');
  if(calculation !== ''){
    displayElement.innerHTML = calculation;
  } else {
    displayElement.innerHTML = '0';
  }
}