const Timer = require('easytimer.js').Timer;
let timerInst = new Timer();
timerInst.start();

timerInst.addEventListener('secondsUpdated', function(e){
  let elementTimer = document.getElementById('timer');
  elementTimer.innerText = timerInst.getTimeValues().toString();
})
