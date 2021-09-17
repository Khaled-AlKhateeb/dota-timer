var alarmAudio = new Audio("Alarm-Fast-A1-www.fesliyanstudios.com.mp3");
var ante = document.getElementById("clock-ampm");  
var clock = document.getElementById("clock-time");
var hours;
var alarmCompare = 0;
var wakeUpRemove = document.getElementById("wakeRemove");
var wakeUp = document.getElementById("wake");
var wakeUpActivation;
var wakeUpTime = document.getElementById("wakeUpTime");

function myHour() {
    var time = new Date();
    hours = time.getHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var antem = time.toLocaleTimeString().includes("PM");
    
    if(hours > 12) {
        hours -= 12;
    }
    
    if(hours == 0) {
        hours = 12;
    }
    
    if(hours.toString().length < 2) {
        hours = "0" + hours;
    }
    if(antem == true) {
        ante.textContent = "PM";
    }   else {
        ante.textContent = "AM";
    }

    if(minutes.length < 2) {
        minutes = "0" + minutes;
    }    

    if(seconds.length < 2) {
        seconds = "0" + seconds;
    }

    setTimeout(myHour, 1000);
    alarm();
    duration()
    
    alarmCompare = hours + ":" + minutes + " " + ante.textContent;
 
    return clock.textContent = hours + ":" + minutes + ":" + seconds;   
};  

myHour();

function duration() {
    var image = document.getElementById("image");
    var greet = document.getElementById("greet");
    var during = hours + ante.textContent;
    var morning = ["05AM", "06AM", "07AM", "08AM", "09AM", "10AM", "11AM"];
    var afternoon = ["12PM","01PM", "02PM", "03PM", "04PM", "05PM"];
    var evening = ["06PM", "07PM", "08PM", "09PM"];
    var night = ["10PM", "11PM", "12AM", "01AM", "02AM", "03AM", "04AM"]

    switch (true) {
        case morning.includes(during):
            image.src ="dota-logo1.jpg";
            greet.textContent ="GOOD MORNING";
        break;
        case afternoon.includes(during):
            image.src ="images.jpg";
            greet.textContent ="GOOD AFTERNOON";
        break;
        case evening.includes(during):
            image.src ="images (1).jpg";
            greet.textContent ="GOOD EVENING";
        break;
        case night.includes(during):
            image.src ="dota-2-logo-vector-01.png";
            greet.textContent ="GOOD NIGHT";
    };
}

wakeUp.addEventListener("change", function (event) {
    var testing = event.target.value;
    var myArr = testing.split("");
    var alarmHours = myArr[0] + myArr[1];
    var alarmMinutes = myArr[3] + myArr[4];
    var alarmAnte;
    
    function syntax() {
        if (alarmHours == 0) {
            alarmHours = 12;
        }
        if (alarmHours > 12) {
            alarmAnte = "PM";
            alarmHours -= 12;
        } else {
            alarmAnte = "AM";
        };

        if (alarmHours.toString().length < 2) {
            alarmHours = "0" + alarmHours;       
        };
    };

    syntax();
    wakeUpActivation = alarmHours + ":" + alarmMinutes + " " + alarmAnte;
    wakeUpTime.innerHTML = "WAKE UP TIME SET TO " + wakeUpActivation;    
});

function alarm() {
    if(wakeUpActivation == alarmCompare) {
        alarmAudio.play();
        wakeUpTime.style.color = "red";
        wakeUpTime.innerHTML = "WAKE UP NOW!";
        flashtext(wakeUpTime);    
    } else {
        alarmAudio.pause();
        wakeUpTime.style.color = "black";
    }
}

wakeUpRemove.addEventListener("click", function() {
    wakeUpActivation = undefined;
    wakeUpTime.innerHTML = "";
    wakeUp.value = "";
});

function flashtext(ele) {
    if (ele.style.color == "red") {
        ele.style.color = "black";
    } else {
        ele.style.color = "red";
    }
}