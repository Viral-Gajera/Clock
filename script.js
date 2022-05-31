let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let second = document.getElementById('second');
let ampm = document.getElementById('AMPM');



setInterval( function(){
    
    let now = new Date();
    let h = now.getHours();

    // logic for digital clock
    if(h>12){
        ampm.innerHTML = 'PM';
        h = h - 12;
    }
    else if( h===12 ){
        ampm.innerHTML = 'PM';
    }
    else{
        ampm.innerHTML = 'AM';
    }

    hour.innerHTML = h.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
    minutes.innerHTML = now.getMinutes().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
    second.innerHTML = now.getSeconds().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });


    // logic for analogue clock
}, 1000 );


let hour_animation = document.getElementById('hour-animation');
let minute_animation = document.getElementById('minute-animation');
let second_animation = document.getElementById('second-animation');

// second_animation.style.transform = `rotate(${270}deg)`;
// minute_animation.style.transform = `rotate(${270}deg)`;
// hour_animation.style.transform = `rotate(${270}deg)`;

let now = new Date();
// now.setHours(12);
// now.setMinutes(00);
// now.setSeconds(0);

let h = ( now.getHours() > 12 ? (now.getHours() - 12) : now.getHours() );
let m = now.getMinutes();
let s = now.getSeconds();

console.log(h);

    h = 30*h + (m/2) + (s/120);
    m = 6*m + (s/10);
    s = 6*s + 6;


setInterval(function(){
  hour_animation.style.transform = `rotate(${h}deg)`;
  minute_animation.style.transform = `rotate(${m}deg)`;
  second_animation.style.transform = `rotate(${s}deg)`;
  s += 6;
  m += 0.1;
  h += 0.0083333;
}, 1000)