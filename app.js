
setInterval(function(){
    const hEl = document.getElementById('hours');
    const mEl = document.getElementById('min');
    const sEl = document.getElementById('sec');
    const dateTime = document.getElementById('date-time');
    
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    h = (h>12) ? "<small>PM</small>." + "0"+ (h-12): h;
    h = (h<10) ? "0"+h: h;
    m = (m<10) ? "0"+m: m;
    s = (s<10) ? "0"+s: s;
    let day = d.getDay();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    date = (date < 10) ? "0" + date: date;

    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    hEl.innerHTML = h;
    mEl.innerText = m;
    sEl.innerText = s;
    dateTime.innerHTML = dayNames[day] + ', ' + monthNames[month] + ' ' + date + ', ' + year;
},1000)