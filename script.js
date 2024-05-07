// FUNGSI ADD TASK MENU

const addTask = document.getElementById("add-task");
const newTask = document.getElementById("new-task");
const close = document.getElementById("close");

if (addTask) {
    addTask.addEventListener("click", () => {
        newTask.classList.add("active");
    })
}

if (close) {
    close.addEventListener("click", () => {
        newTask.classList.remove("active");
    })
}


// FUNGSI INPUT ADD TASK

const addNewTask = document.getElementById("add-newtask");
const taskList = document.getElementById("list-container");


function newTasks () {
    if (addNewTask.value === "") {
        alert("Please input your task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = addNewTask.value;
        taskList.appendChild(li);
        let deleteTaskButton = document.createElement("button");
        deleteTaskButton.innerHTML = "Delete";
        li.appendChild(deleteTaskButton);
    }
    addNewTask.value = "";
}

taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
})



// function newTasks () {
//     if (addNewTask.value === '') {
//         alert("Please input your task");
//     }
//     else {
//         let li = document.createElement("li");
//         li.innerHTML = addNewTask.value;
//         taskList.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     addNewTask.value = "";
//     // saveData();
// }

// taskList.addEventListener("click", function (e) {
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked");
//         saveData();
//     }
//     else if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove();
//     }
// })

// function saveData () {
//     localStorage.setItem("data", taskList.innerHTML);
// }

// function showTask () {
//     taskList.innerHTML = localStorage.getItem("data");
// }

// showTask();


// =====FUNGSI COMPLETE DAN DELETE=====
// const complete = document.getElementById("complete");
// const deleteTask = document.getElementById("delete");
// var list = document.getElementById("list-container");

// function conDelete () {
//     if (deleteTask) {
//         deleteTask.addEventListener("click", () => {
//             list.remove("active");
//         })
//     }
// }






// PERCOBAAN UNTUK MEMBUAT REMAINDER ALARM

function setAlarm () {
    var alarmInput = document.getElementById("alarm-time");
    var alarmTime = alarmInput.value;

    if (alarmTime === "") {
        alert("Harap pilih waktu alarm");
        return;
    }

    var now = new Date();
    var alarm = new Date(now.toDateString() + " " + alarmTime);

    if (alarm <= now) {
        alarm.setDate(alarm.getDate() + 1);
    }

    var timeUntilAlarm = alarm - now;

    setTimeout (function() {
        playAlarmSound();
        // alert("Waktunya alarm!");
    }, timeUntilAlarm);
}

function playAlarmSound () {
    var alarmSound = document.getElementById("alarm-sound");
    alarmSound.play();
}

function stopAlarmSound () {
    var alarmSound = document.getElementById("alarm-sound");
    alarmSound.pause();
    alarmSound.currentTime = 0;
}

function updateClock () {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = addLeadingZero(hours);
    minutes = addLeadingZero(minutes);
    seconds = addLeadingZero(seconds);

    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").textContent = timeString;

    setTimeout(updateClock, 1000);
}

function addLeadingZero (number) {
    if (number < 10) {
        return "0" + number;
    }
    return number;
}
updateClock();



