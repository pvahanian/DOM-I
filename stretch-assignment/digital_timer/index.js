// ## Stretch On The Stretch!
// If you compelete the timer with time to spare:
// * Self study and research DOM `events` and `event listeners`
// * SG1: Implement a start button. The digital timer should not start until the button is pressed.
// * SG2: Once you have a start button working, configure it so that when a user presses the start button it is disabled and not enabled until the timer finishes.
// * SG3: Once you have finished SG2, add new new button called `reset` that resets the timer to 0:00:00 and then pressing the start button again will start the timer from 0.
// * SG4: Finally, if you have completed all the stretch goals, spend some time styling your timer and buttons.

const button = document.querySelector('button');
let seconds = document.querySelector('#secondOnes');
let counter=0;

const secondTimer = function () { setInterval(() => {
    counter++;
    seconds.innerText=counter;
    if(counter>5){
    clearInterval(secondTimer);
    }
  }, 1000)};


button.addEventListener('click', event => {
 button.innerHTML = `Click count: ${event.detail}`;
  console.log("click happened")
  seconds.innerText=counter;
  secondTimer();  
});


