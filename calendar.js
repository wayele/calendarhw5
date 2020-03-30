var hrNine = $('#09AM');
var saveBtnNine = $('#saveBtn-nine');
var inpValueNine = $('#nine');



$(document).ready(function () {
    // Moment object to check the current date and time
    var time = moment();
    // console.log(time)
    // Formate current date and time to our preference
    $('#currentDay').text(time.format("lll"));

    var hour = moment().format("hh mmA");
    // console.log(hour);
    // var currentHour = moment().format('LT');
    var currentHour = moment().hour();
    // console.log(currentHour)

    var thour = $('.hour');
    // console.log(thour);
    // A for loop to check if current hour is less than, equal or greater than our calendar hours and apply style appropriately
    for (const key in thour) {
        if (thour[key].id) {
            // console.log(thour[key].id)
            if (thour[key].id < currentHour) {
                thour[key].className = "hour past"
            } else if (thour[key].id > currentHour) {
                thour[key].className = "hour future"
            } else {
                thour[key].className = "hour present"
            }
        }
    }
    // Create an event listener to set items to local storage on click of save
    $('.saveBtn').on("click", function () {
        const id = $(this).attr("id")
        const splitId = id.split("-")
        const textareaId = "#" + splitId[1]
        // console.log(textareaId);
        const value = $(textareaId).val();
        // If statement to check a value is entered 
        if (value) {
            localStorage.setItem(textareaId, value)
            // console.log(value);
            // console.log(textareaId);
        }
        // console.log($('textarea'))

        // Create an array of IDS that are storing items to local storage
        var arr = ["#nine", "#ten", "#eleven", "#twelve", "#one", "#two", "#three", "#four", "#five"]
        // Iterate through the array to display the user inputs to the textbox so it saves during refresh
        for (let i = 0; i < arr.length; i++) {
            const task = localStorage.getItem(arr[i]);
            console.log(task);

            const textAreaOutput = document.getElementById(arr[i]);
            console.log(textAreaOutput);

        }
    })


})
// I cannot get the code to display what is being saved in local storage. Will need help understanding local storage and its functionality better.