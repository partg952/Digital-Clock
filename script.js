let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let timestamp = document.getElementById('time-stamp')
let date = new Date()
let h = date.getHours()
let m = date.getMinutes()
    // console.log(m)
    minutes.innerHTML = m
    // alert('hello world')


    timestamp.innerHTML = "AM"

    let s = date.getSeconds()
    seconds.innerHTML = s
    console.log(s)
num = 1

hours.innerHTML = h


setInterval(set,1000)

function set(){
    s++
    seconds.innerHTML = s
    if(s==59){
        s = 0
        m++
        minutes.innerHTML = m
        
    }

    if(m>=60){
        h++
        hours.innerHTML = h
    }

    if(h>=12){
        timestamp.innerHTML = "PM"

    }
    
}
