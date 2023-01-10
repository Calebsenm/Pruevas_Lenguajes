
// recive the elements of the html 
const timeDisplay = document.querySelector("#timeDisplay")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resetBtn = document.querySelector("#resetBtn")

// variables 
let StartTime = 0;
let elapseTIme = 0;
let currentTime = 0;
let paused = true;
let intervalid;
let hours = 0;
let mins = 0;
let secs = 0;

// Start button for watch  
startBtn.addEventListener("click",() =>{
    if(paused){
        paused = false;
        StartTime = Date.now() - elapseTIme;
        intervalid = setInterval(updateTime,75);
    }
   
});



// for pause the time 
pauseBtn.addEventListener("click",() =>{
    if(!paused){
        paused = true;
        elapseTIme = Date.now() - StartTime;
        clearInterval(intervalid);
    }
});


// for the pause the time 
resetBtn.addEventListener("click",() =>{
    paused = true;
    clearInterval(intervalid);

    StartTime = 0;
    elapseTIme = 0;
    currentTime = 0;
    hours = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";

});

// for update the time 
function updateTime(){   
    elapseTIme = Date.now() - StartTime;
    secs = Math.floor((elapseTIme/1000 )% 60);
    mins = Math.floor((elapseTIme/ (1000 * 60 )) % 60);
    hours = Math.floor((elapseTIme/ (1000 * 60 * 60)) % 60);
  
    secs = pad(secs)
    mins = pad(mins)
    hours = pad(hours)

    timeDisplay.textContent = ` ${hours}:${mins}:${secs}`;
 
    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}
