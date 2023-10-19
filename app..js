var startbtn = document.getElementById("start");
var stopBtn  = document.getElementById("Stop");
var resetBtn = document.getElementById("Reset");

var hour =   00;
var minute = 00;
var second = 00;
var count =  00;

startbtn.addEventListener("click",function(){
timer = true;
stopwatch();
});

stopBtn.addEventListener("click",function(){
  timer = false;
});

resetBtn.addEventListener("click",function(){
  timer = false;
  hour  = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
})

function stopwatch(){
  if (timer){
    count++;

    if (count == 100){
      second++;
      count = 0;
    }
    if(second == 60){
      minute++;
      second = 0;
    }
    if (minute == 60){
      hour++;
      minute = 0;
      second = 0;
    }

    let hrstring = hour;
    let minstring = minute;
    let secstring = second;
    let countstring = count;
    
    if (hour < 10){
    hrstring = "0" +hrstring;
    }

    if (minute< 10){
      minstring = "0" + minstring;
    }

    if (second < 10){
      secstring = "0" + secstring;
    }

    if (count < 10){
      countstring = "0" + countstring;
    }

    document.getElementById("hr").innerHTML= hrstring;
    document.getElementById("min").innerHTML= minstringstring;
    document.getElementById("sec").innerHTML= secstringstring;
    document.getElementById("count").innerHTML= countstring;
    setTimeout(stopwatch, 10);
  }
}


