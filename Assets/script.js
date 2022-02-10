const time = document.getElementById("currentDay");
time.textContent = (moment().format('dddd, MMMM Do'));
var currentHour = moment().format('HH');

let eventList = [];

// make a list of current events
const eventListUpdate = function () {
    for (let i = 9; i < 18; i++) {
        eventList.push(document.getElementById("event" + i).textContent);
        console.log(eventList);
    }
};

// display saved events upon opening the page
const fillList = function () {
    var retrieveEvents = JSON.parse(localStorage.getItem("day'sEvents")); 
    console.log("retrieveEvents", retrieveEvents); 
    for (let i = 9; i < 18; i++) {
        let currentEvent =$('#event'+i).find("p");
        console.log("p",currentEvent);
        currentEvent[0].textContent = retrieveEvents[i-9];
        console.log( currentEvent[0].textContent);
    }
};

// click save to save events
$(".text-white").on("click", function () {
    eventList = [];
    eventListUpdate();
    localStorage.setItem("day'sEvents", JSON.stringify(eventList));
});

// change event to editable
$(".col-10").on("click", "p", function () {
    var text = $(this).text();
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// stop editing event
$(".col-10").on("blur", "textarea", function () {
    var taskP = $("<p>").addClass("m-1").text($(this).val() + " ");
    if (taskP) {
        $(this).replaceWith(taskP);
        return;
    }
    $(this).replaceWith(space);
});

// color events based on past or future
const checkTime = function () {
    for (let i = 9; i < 18; i++) {
        let currentEvent = document.getElementById("event" + i);
        if (i < currentHour) {
            currentEvent.setAttribute("class", "p-3 mb-2 col-10 bg-secondary text-black");
        }
        if (i == currentHour) {
            currentEvent.setAttribute("class", "p-3 mb-2 col-10 bg-danger text-black");
        }
        if (i > currentHour) {
            currentEvent.setAttribute("class", "p-3 mb-2 col-10 bg-success text-black");
        }
    }
}

checkTime();
// eventListUpdate();
fillList();