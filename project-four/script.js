/*
// input (word/ number) - validation
// input limitation + calculate how many time s/he attempt
// success or failure message

###
// instruction
// everytime submit message
// reset button
*/

// Selecting dom element
const userInput = document.querySelector('.user-input');
const button = document.querySelector('.guess');
const result = document.querySelector('.result');
const remaining = document.querySelector('.remaining');

const WIN_NUMBER = 16; // Pre-defined win number
const TRY_LIMIT = 5; // Pre-defined total guess time
let countClick = 0; // initialize the count click variable
remaining.innerHTML = `You can try only ${TRY_LIMIT} times.`;

// Listening to click event
button.addEventListener( 'click', listenEvent );

// listen function
function listenEvent(){
  let userInputValue = Math.round(userInput.value);
  result.innerHTML = '';
  console.log(typeof userInputValue);
  
  /*
  * Check is it Number?
  * check is it Negative value?
  * @issue 0 dila condition true hoi, aita fix korar kono way?
  */
  if( (typeof userInputValue != 'number') || !Number.isSafeInteger(userInputValue) ) return;
  
  countClick += 1; // increase the count click
  
  
  if( WIN_NUMBER === userInputValue ){
    dom_manupulation(`Congratulation 👍 !! You guess the correct number ${WIN_NUMBER}, you took ${countClick} attempted to get successed.`, true);
  }
  
  let remaining_try = TRY_LIMIT - countClick;
  if(remaining_try == 0){
    dom_manupulation('Sorry 😞 You have not guessed the correct number! try again');
  }
  
  remaining.innerHTML = `You can try only ${remaining_try} times more.`;
}

/*
* dom manupulation function
*/
function dom_manupulation(printtext = '', is_success = false){
  if(is_success){
    result.innerHTML = printtext;
    remaining.innerHTML = '';
  }else {
    remaining.innerHTML = printtext;
  }
  countClick = 0;
  button.setAttribute('disabled', true);
}