const time = document.getElementById("currentDay");
time.textContent = (moment().format('dddd, MMMM Do'));
var currentHour = moment().format('HH');

const checkTime = function () {
    for (let i = 9; i < 18; i++) {
        console.log(i);
        var currentEvent = document.getElementById("event" + i);
        if (i < currentHour) {
            currentEvent.setAttribute("class", "p-3 mb-2 col-10 bg-secondary text-black");
        }
        if (i == currentHour) {
            currentEvent.setAttribute("class", "p-3 mb-2 col-10 bg-danger text-black");
        }
        if (i > currentHour) {
            currentEvent.setAttribute("class", "p-3 mb-2 col-10 bg-success text-black");
        }
        // console.log(document.getElementById("event" + i).textContent);
    }
}

checkTime();