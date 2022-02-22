const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const listcontainer = document.getElementById('#splits');
  const listItem = document.createElement('li');
  listItem.innerText = chronometer.currentTime

  console.log(listItem.innerText)
  listcontainer.appendChild(listItem.innerText);

;}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains('start')){
    btnLeftElement.className = 'btn stop';
    btnLeftElement.innerHTML = 'STOP';
    chronometer.start(printTime)
    console.log('hello', chronometer.currentTime)
  } else if (btnLeftElement.classList.contains('stop')) {
    btnLeftElement.className = 'btn start';
    btnLeftElement.innerHTML = 'START';
    chronometer.stop()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('reset')){
    btnRightElement.className = 'btn split';
    btnRightElement.innerHTML = 'SPLIT ';
    chronometer.reset();
  } else if (btnRightElement.classList.contains('split')) {
    btnRightElement.className = 'btn reset';
    btnRightElement.innerHTML = 'RESET';
    chronometer.split();
  }
});