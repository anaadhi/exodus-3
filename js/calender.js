var start = NaN;
var end = NaN;
function createmonth(month, year){
    
    if (month == new Date().getMonth() && year == new Date().getFullYear()) {
        var day = new Date().getDate();
    } else {
        var day = -1;
    }
    // get number of days in current month
    var daysinmonth = new Date(year, month+1, 0).getDate();
    // get the day of 1st of the month
    var firstday = new Date(year, month, 1).getDay();

    calender = document.getElementById("calender")
    // convert month to string
    switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }

    content = ""
    content += "<div class='month'><h2>" + month+"</h2>";
    
    week = 0 // week counter
    content += "<div class=\"week\">";
    for (i = 0; i < firstday; i++) {
        content += `<h2></h2>`;
        week += 1; 
    }
    // insert days of the month
    for (i = 1; i <= daysinmonth; i++) {
        // if day is less than today then add class "past"
        if (i < day) {
            content += "<h2 class=\"past\">" + i + "</h2>";
        }
        else {
            content += "<h2 onclick='add()'>" + i + "</h2>";
        }
        week += 1;
        if (week == 7) {
            content += "</div><div class=\"week\">";
            week = 0;
        }
    }
    // insert empty divs to fill the last week
    
    if (week != 0){
        for (i = week; i < 7; i++) {
            content += `<h2></h2>`;
        }
    }
    // insert an emprt week
    content += "</div><div class=\"week\">";
    content += "</div>";
    content += "</div>";
    calender.innerHTML += content;
}

function calendermaker(){
    var month = new Date().getMonth();
    // get current year
    var year = new Date().getFullYear();
    createmonth(month, year);
    // get month and year of next month
    if (month == 11) {
        month = 0;
        year += 1;
    }
    else {
        month += 1;
    }
    createmonth(month, year);
    if (month == 11) {
        month = 0;
        year += 1;
    }
    else {
        month += 1;
    }
    createmonth(month, year);
    if (month == 11) {
        month = 0;
        year += 1;
    }
    else {
        month += 1;
    }
    createmonth(month, year);
    if (month == 11) {
            month = 0;
            year += 1;
        }
        else {
            month += 1;
        }
        createmonth(month, year);
    
    
}

calendermaker();
function calender1(){
    // change class of calender to "calender visible"
    document.getElementById("calender").className = "calender visible";
    console.log("hello")
    start = NaN;
    end = NaN;
    
}








