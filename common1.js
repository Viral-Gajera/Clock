let nav_bar = document.querySelector('.nav-bar');

let nav_bar_content = `
<ul>
    <li class="active">
        <a href="../clock/clock.html">Clock</a>
    </li>
    <li> 
        <a href="../world-clock/world-clock.html">World Clock</a> 
    </li>
    <li> 
        <a href="../stopwatch/stopwatch.html">StopWatch</a> 
    </li>
    <li> 
        <a href="../timer/timer.html">Timer</a> 
    </li>
</ul>`;

nav_bar.innerHTML = nav_bar_content;