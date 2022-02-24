// ====================
console.log('Start Warten für 3 Sekunden...');

setTimeout(function myNewFunk() {
  console.log('Erledigt. Du hast 3 Sekunden verschwendet.');
}, 3000);


// ====================
function time() {
  let timeDate = new Date()
  console.log(timeDate.toLocaleTimeString('de-DE'));
}

let runningTime = setInterval(time, 1000)


// ====================
let counter = 11;

let countdown = setInterval(() => {
  
  counter--;
  console.log(counter);

  if(counter === 0) {
    console.log('Endlich Feierabend!');
    clearInterval(countdown);
  }
}, 1000);