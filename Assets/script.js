const time = document.getElementById("currentDay");
time.textContent = (moment().format('dddd, MMMM Do'));
var currentHour = moment().format('HH');

$(".col-10").on("click", "p", function () {
    var text = $(this).text();
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

$(".col-10").on("blur", "textarea", function () {
    var taskP = $("<p>").addClass("m-1").text($(this).val() + " ");
    if (taskP) {
        $(this).replaceWith(taskP);
        return;
    }
    $(this).replaceWith(space);
});

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