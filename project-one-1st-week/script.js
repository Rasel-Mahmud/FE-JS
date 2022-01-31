// declared a constant number for win
const winNumber = 13;

// select the button element
const button = document.querySelector('.get-user-input-value');

// getting user input value
button.addEventListener('click', function(){
  // select the input field & getting it's value
  const userInputNumber = Number(document.querySelector('.user-input-number').value);

  /*
  * Check the input field is empty or negative
  * Run the switch case if everything is ok
  */

  if(userInputNumber == ''){
    alert('Please, guess a number')
  } else if(userInputNumber < 0){
    alert('Please, Add a positive number')
  } else {
    // check the number & alert the result
    switch( true ) {
      case ( userInputNumber < 12 ):
        alert('Think BIG!');
        break;
      case ( userInputNumber === winNumber ):
        alert('Congratulation, you have won the prize!!!');
        break;
      case ( userInputNumber >  13 ):
        alert('You guessed the big number!');
        break;
      default:
        null;
    }
  }
});

/*
* var, let, const
* if, else if conditions
* switch case
*/
