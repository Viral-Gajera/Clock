let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let second = document.getElementById('second');
let ampm = document.getElementById('AMPM');

setInterval( function(){
    
    let now = new Date();
    
    let h = now.getHours();

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
}, 1000 )
