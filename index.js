const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const SecondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");


const seconds = 1000,
minutes = 60 * seconds,
hours = 60 * minutes,
day = 24 * hours;

const timerFunction = ()=>{
    const IntervalId = setInterval(()=>{
    const timer = new Date("01/26/2024").getTime();
    const today = new Date().getTime();
    const diff = timer - today;

    const leftDay = Math.floor(diff / day);
    const leftHours = Math.floor((diff % day)/hours);
    const leftMinutes = Math.floor((diff % hours)/minutes);
    const leftSeconds = Math.floor((diff % minutes)/seconds);


    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHours;
    minutesElement.innerText = leftMinutes;
    SecondsElement.innerText = leftSeconds; 
    
    
    //console.log(`${leftDay}:${leftHours}:${leftMinutes}:${leftSeconds}`);
    
    if(diff < 0){
        heading.innerText = "Time's Up..!!";
        counterTimer.style.display = "none";
        clearInterval(IntervalId);
    }
},1000)
    
}
timerFunction();