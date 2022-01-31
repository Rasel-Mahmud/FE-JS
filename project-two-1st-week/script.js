// Getting input field and button
const inputOne = document.querySelector('.input-one');
const inputTwo = document.querySelector('.input-two');
const resultButton = document.querySelectorAll('.result-button');
const clearButton = document.querySelector('.clear-button');
let displayResult = document.querySelector('.result')

let hello;

// loop over all button nodelist
resultButton.forEach(function(eachButton){

  // Add Event Listener for each button
  eachButton.addEventListener('click', function(e){
    let inputOneValue = Number(inputOne.value);
    let inputTwoValue = Number(inputTwo.value);
    let dataType = eachButton.dataset.type;

    // IF value is [empty, 0, negative] then return form here
    if((inputOneValue == '' || inputTwoValue == '') || (inputOneValue < 0 || inputTwoValue < 0)) return;
    let result = calculate(inputOneValue, inputTwoValue, dataType);
    displayResult.innerHTML = 'Result: '+ result;
  })
})

/**
 * @param number
 * @param number
 * @param string
 * @return number
 */
function calculate(numberOne, numberTwo, dataType){
  let result = 0;
  switch(dataType){
    case 'addition':
      result = numberOne + numberTwo;
      break;
    case 'subtraction':
      result = numberOne - numberTwo;
      break;
    case 'multiplication':
      result = numberOne * numberTwo;
      break;
    case 'division':
      result =  numberOne / numberTwo;
      break;
    default:
      result = 0;
  }
  return result;
}

// Reset all field
clearButton.addEventListener('click', function(){
  inputOne.value = '';
  inputTwo.value = '';
  displayResult.innerHTML = '';
});

/*
* function
* switch
* (break)
* (type check)
* String project
* Array project
*/
