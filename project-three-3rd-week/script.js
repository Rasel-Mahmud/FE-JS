/*
* Get element from dom
*/
const result = document.querySelector('.output'); // const
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const withASpecificValue = document.querySelector('.with-a-specific-value'); // Case Sensitivity (Camel case)


let currentValue = 0; // Storing Values
let userValue; // Declare Variables + let


increase.addEventListener('click', function(){
  increaseFn(userValue)
})

decrease.addEventListener('click', function(){
  descreseFn(userValue)
})

withASpecificValue.addEventListener('click', function(){
  if(Number.MAX_SAFE_INTEGER < Number(prompt('Enter your number'))){
    let promtValue = Number(prompt('Enter your number'));
  
    console.log(promtValue);
    /*
    * Check is it number or not
    * Check if there has any character
    */

    switch(true){
      case typeof promtValue !== 'number' : 
      case isNaN(promtValue) :
        alert('Please add a number');
        break;
      case promtValue <= 0 : 
        alert('Please use a positive number')
        break;
      case promtValue > 0 :
        userValue = promtValue; // Assigning the Value of One Variable to Another
        break;
      default:
        userValue = 1;
    }
  }
});


// increase function
function increaseFn(increaseBy = 1){
  currentValue += increaseBy; // Increment a Number // adding two numbers
  result.innerHTML = currentValue;
}

// descrese function
function descreseFn(decreaseBy = 1){
  if(currentValue <= 0) return; // if statement
  currentValue -= decreaseBy // Decrement a Number
  result.innerHTML = currentValue;
}