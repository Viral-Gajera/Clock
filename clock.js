let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let second = document.getElementById('second');
let ampm = document.getElementById('AMPM');

setInterval( function(){
    
    let now = new Date();
    let h = now.getHours();

    // logic for digital clock
    // if(h>12){
    //     ampm.innerHTML = 'PM';
    //     h = h - 12;
    // }
    // else if( h===12 ){
    //     ampm.innerHTML = 'PM';
    // }
    // else{
    //     ampm.innerHTML = 'AM';
    // }

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

setInterval( function()
{
  let now = new Date();

  let h = ( now.getHours() > 12 ? (now.getHours() - 12) : now.getHours() );
  let m = now.getMinutes();
  let s = now.getSeconds();

  h = 30*h + (m/2) + (s/120);
  m = 6*m + (s/10);
  s = 6*s;

  hour_animation.style.transform = `rotate(${h}deg)`;
  minute_animation.style.transform = `rotate(${m}deg)`;
  second_animation.style.transform = `rotate(${s}deg)`;

}, 1000 );