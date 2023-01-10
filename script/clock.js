const deg = 6;
const hours = document.querySelector('#hr');
const minutes = document.querySelector('#mn');
const seconds = document.querySelector('#sc');

setInterval(() => {
    const time = new Date();
    const hh = time.getHours() * 30;
    const mm = time.getMinutes() * deg;
    const ss = time.getSeconds() * deg;

    hours.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    minutes.style.transform = `rotateZ(${mm}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;
})

setInterval(() => {
    let digiClock = document.querySelector(".display--clock");
    let time = new Date();
    let hh = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();
    let day = 'AM';

    if(hh > 12){
        day = 'PM';
        hh = hh - 12;
    }
    if(hh == 0){
        hh = 12;
    }
    if(ss < 10){
        ss = '0' + ss;
    }
    if(mm < 10){
        mm = '0' + mm;
    }
    if(hh < 10){
        hh = '0' + hh;
    }
    
    digiClock.textContent = hh + ':' + mm + ':' + ss + " " + day;
})


