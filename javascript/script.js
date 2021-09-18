//variables
var wakeAudio = new Audio("./audio/Alarm-Fast-A1-www.fesliyanstudios.com.mp3")
var lunchAudio = new Audio("./audio/Alarm-Fast-A1-www.fesliyanstudios.com.mp3");
var sleepAudio = new Audio("./audio/Alarm-Fast-A1-www.fesliyanstudios.com.mp3");
var invoker; //the event invoker 
var alarmValue; //value of changed input
var hours;
var alarmCompare;   
var alarmActivation;
var clock = document.getElementById("clock-time");
var ante = document.getElementById("clock-ampm");
var wakeCall;
var lunchCall;
var sleepCall;
var wakeText = document.getElementById("wakeTime");
var lunchText = document.getElementById("lunchTime");
var sleepText = document.getElementById("sleepTime");

window.addEventListener("change", function tryMe(event) {
    invoker = event.target.id;
    alarmValue = event.target.value;
    findAlarmValue();
    textUpdate(invoker, alarmActivation);
});

function textUpdate(para, alAc) {
    if (para == "wake") {
        wakeText.textContent = "Wake me up @ " + alAc;
        wakeCall = alAc;
    } else if (para == "lunch") {
        lunchText.textContent = "Feed me @ " + alAc;
        lunchCall = alAc;
    } else if (para == "sleep") {
        sleepText.textContent = "Bed Time @ " + alAc;
        sleepCall = alAc;
    };
};

function myHour() {
    var time = new Date();
    hours = time.getHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var antem = time.toLocaleTimeString().includes("PM");

    if (hours > 12) {
        hours -= 12;
    };

    if (hours == 0) {
        hours = 12;
    };

    if (hours.toString().length < 2) {
        hours = "0" + hours;
    };

    if (antem == true) {
        ante.textContent = "PM";
    } else {
        ante.textContent = "AM";
    };

    if (minutes.length < 2) {
        minutes = "0" + minutes;
    };

    if (seconds.length < 2) {
        seconds = "0" + seconds;
    };

    setTimeout(myHour, 1000);
    duration();

    alarmCompare = hours + ":" + minutes + " " + ante.textContent;
    clock.textContent = hours + ":" + minutes + ":" + seconds;
};
myHour();

function findAlarmValue() {
    var myArr = alarmValue.split("");
    var alarmHours = myArr[0] + myArr[1];
    var alarmMinutes = myArr[3] + myArr[4];
    var alarmAnte;

    function syntax() {
        if (alarmHours == 0) {
            alarmHours = 12;
        };

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
    alarmActivation = alarmHours + ":" + alarmMinutes + " " + alarmAnte;
};

function duration() {
    var image = document.getElementById("image");
    var greet = document.getElementById("greet");
    var during = hours + ante.textContent;
    var morning = ["05AM", "06AM", "07AM", "08AM", "09AM", "10AM", "11AM"];
    var afternoon = ["12PM", "01PM", "02PM", "03PM", "04PM", "05PM"];
    var evening = ["06PM", "07PM", "08PM", "09PM"];
    var night = ["10PM", "11PM", "12AM", "01AM", "02AM", "03AM", "04AM"];

    switch (true) {
        case morning.includes(during):
            image.src = "./image/dota-logo1.jpg";
            greet.textContent = "GOOD MORNING";
            break;
        case afternoon.includes(during):
            image.src = "./image/images.jpg";
            greet.textContent = "GOOD AFTERNOON";
            break;
        case evening.includes(during):
            image.src = "./image/images (1).jpg";
            greet.textContent = "GOOD EVENING";
            break;
        case night.includes(during):
            image.src = "./image/dota-2-logo-vector-01.png";
            greet.textContent = "GOOD NIGHT";
    };
};

var wakeDuration = false;
var lunchDuration = false;
var sleepDuration = false;

function alarm() {
    if (wakeCall == alarmCompare) {
        wakeAudio.play();
        wakeText.innerHTML = "WAKE UP NOW!";
        wakeText.style.color = "red";
        wakeDuration = true;
    } else if (wakeDuration == true) {
        wakeDuration = false;
        wakeAudio.pause();
        wakeText.style.color = "black";
        wakeText.innerHTML = "SET ANOTHER ALARM!";
    };

    if (lunchCall == alarmCompare) {
        lunchAudio.play();
        lunchText.style.color = "red";
        lunchText.innerHTML = "LUNCH IS READY";
        lunchDuration = true;
    } else if (lunchDuration == true) {
        lunchDuration == false;
        lunchAudio.pause();
        lunchText.style.color = "black";
        lunchText.innerHTML = "SET ANOTHER ALARM!"
    };

    if (sleepCall == alarmCompare) {
        sleepAudio.play();
        sleepText.style.color = "red";
        sleepText.innerHTML = "GET REST SLEEPY HEAD";
        //setTimeout (flashtext(sleepText), 1000);
        sleepDuration = true;
    } else if (sleepDuration == true) {
        sleepDuration == false;
        sleepAudio.pause();
        sleepText.style.color = "black";
        sleepText.innerHTML = "SET ANOTHER ALARM!";
    };

    setTimeout(alarm, 1000);
};
alarm();

function flashtext(ele) {
    if (ele.style.color == "red") {
        ele.style.color = "black";
    } else {
        ele.style.color = "red";
    }
};

var removeButton

window.addEventListener("click", function clickme(event) {
    removeButton = event.target.id;
    if (removeButton == "wakeRemove") {
        modify("wake");
    }
    if (removeButton == "lunchRemove") {
        modify("lunch");
    }
    if (removeButton == "sleepRemove") {
        modify("sleep");
    }
})

var anyVar1;
var anyVar2;
var anyVar3;
var anyVar4;
var anyVar5;

function modify(anyParA1) {
    anyVar1 = anyParA1 + "Call";
    anyVar2 = anyParA1 + "Duration";
    anyVar3 = anyParA1 + "Audio";
    anyVar4 = anyParA1 + "Text";
    document.getElementById(anyParA1).value = "";
    removeMe()
}

function removeMe() {
    eval(anyVar1 + " = ''");
    eval(anyVar2 + " = false");
    eval(anyVar3 + ".pause()");
    eval(anyVar4 + ".textContent = 'SET ALARM'");
    eval(anyVar4 + ".style.color = 'black'");
}