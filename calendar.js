// var time = moment();
// console.log(time)
// $('#currentDay').text(time.format("lll"));

var hour = moment().format("h hhA");
console.log(hour);
// var currentHour = moment().format('LT');
var currentHour = moment().hour();
console.log(currentHour)

var thour = $('.hour');
console.log(thour);

for (const key in thour) {
    if (thour[key].id) {
        console.log(thour[key].id)
        if (thour[key].id < currentHour) {
            thour[key].className = "hour past"
        } else if (thour[key].id > currentHour) {
            thour[key].className = "hour future"
        } else {
            thour[key].className = "hour present"
        }
    }
}