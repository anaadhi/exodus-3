var start = 0;
var end = 0;

locations = ["MOARIS", "OENOTRIa", "PLANUM", "LUCUS","MENSA", "GORDII "]
function monthToDay(month){
    console.log(month)
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
    return month;
}
function comparedates(day1, month1, year1, day2, month2, year2) {
    // convert day1 month1 year1 to date1
    date1 = new Date(year1, month1, day1);
    // convert day2 month2 year2 to date2
    date2 = new Date(year2, month2, day2);
    // compare date1 and date2
    if (date1 >= date2) {
        return true;
    }
    else{
        return false;
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

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
    var monthnum = month; 
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
            if (week == 6) {
                content += `<h2 id="${i},${monthnum},${year}" onclick='add(${i},"${monthnum}",${year})' onmouseover="highlight(this)" onmouseout="rem(this)" style="border-radius: 0 20px 20px 0;">` + i + "</h2>"
            } else if (week == 0) {
                content += `<h2 id="${i},${monthnum},${year}" onclick='add(${i},"${monthnum}",${year})' onmouseover="highlight(this)" onmouseout="rem(this)" style="border-radius: 20px 0 0 20px;">` + i + "</h2>"
            } else {
            content += `<h2 id="${i},${monthnum},${year}" onclick='add(${i},"${monthnum}",${year})' onmouseover="highlight(this)" onmouseout="rem(this)">` + i + "</h2>";
            }
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

function add(day , month, year){
    console.log(start)
    if (start == 0) {
        start = day +","+ month + "," +year;
        document.getElementById(day +","+ month + "," +year).className = "selected1";
    } else {
        end = day +","+ month + "," +year;
        document.getElementById("calender").className = "calender hidden";
        // convert start.split(",")[1] to month
        var month1 = start.split(",")[1];
        // convert to string
        month1 = String(month1);
        console.log(month1 , month)
        switch (month1) {
            case "0":
                month = "Jan";
                break;
            case "1":
                month = "Feb";
                break;
            case "2":
                month = "March";
                break;
            case "3":
                month = "April";
                break;
            case "4":
                month = "May";
                break;
            case "5":
                month = "June";
                break;
            case "6":
                month = "July";
                break;
            case "7":
                month = "Aug";
                break;
            case "8":
                month = "Sept";
                break;
            case "9":
                month = "Octr";
                break;
            case "10":
                month = "Nov";
                break;
            case "11":
                month = "Dec";
                break;
        }
        switch (month) {
            case "0":
                month = "Jan";
                break;
            case "1":
                month = "Feb";
                break;
            case "2":
                month = "March";
                break;
            case "3":
                month = "April";
                break;
            case "4":
                month = "May";
                break;
            case "5":
                month = "June";
                break;
            case "6":
                month = "July";
                break;
            case "7":
                month = "Aug";
                break;
            case "8":
                month = "Sept";
                break;
            case "9":
                month = "Octr";
                break;
            case "10":
                month = "Nov";
                break;
            case "11":
                month = "Dec";
                break;
        }

        document.getElementById('dep').innerText = start.split(",")[0] + " " + month + " " + start.split(",")[2];
        document.getElementById('ret').innerText = end.split(",")[0] + " " + month + " " + end.split(",")[2];
        start = 0;
        end = 0;
    }
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
    start = 0;
    end = 0;
    
}

function highlight(element){
    if (start != 0) {
        // get the id of the element
        var id = element.id;
        // split the id to get day, month and year
        var id = id.split(",");
        var day = id[0];
        var month = id[1];
        var year = id[2];
        day2 = start.split(",")[0] ;
        month2 = start.split(",")[1];
        year2 = start.split(",")[2];

        console.log(start)
        if(comparedates(day, month, year, start.split(",")[0], start.split(",")[1], start.split(",")[2])){
            // go to all days between start and end and change their class to "selected"
            while (day != day2 || month != month2 || year != year2) {
                if (document.getElementById(day2 +","+ month2 + "," +year2).className != "selected1"){
                
                    document.getElementById(day2 +","+ month2 + "," +year2).className = "selected";
                }
                day2 = parseInt(day2) + 1;
                if (day2 > new Date(year2, month2+1, 0).getDate()) {
                    day2 = 1;
                    month2 = parseInt(month2) + 1;
                    if (month2 > 11) {
                        month2 = 0;
                        year2 = parseInt(year2) + 1;
                    }
                }
            }
            if (document.getElementById(day2 +","+ month2 + "," +year2).className != "selected1"){
                element.className = "selected2";
                }
        }
        

    }
}
function rem(element)
{
    if (start != 0) {
        // get the id of the element
        var id = element.id;
        // split the id to get day, month and year
        var id = id.split(",");
        var day = id[0];
        var month = id[1];
        var year = id[2];
        day2 = start.split(",")[0] ;
        month2 = start.split(",")[1];
        year2 = start.split(",")[2];

        console.log(start)
        if(comparedates(day, month, year, start.split(",")[0], start.split(",")[1], start.split(",")[2])){
            // go to all days between start and end and change their class to "selected"
            while (day != day2 || month != month2 || year != year2) {
                if (document.getElementById(day2 +","+ month2 + "," +year2).className != "selected1"){
                
                document.getElementById(day2 +","+ month2 + "," +year2).className = "";
                }
                day2 = parseInt(day2) + 1;
                if (day2 > new Date(year2, month2+1, 0).getDate()) {
                    day2 = 1;
                    month2 = parseInt(month2) + 1;
                    if (month2 > 11) {
                        month2 = 0;
                        year2 = parseInt(year2) + 1;
                    }
                }
            }
            if (document.getElementById(day2 +","+ month2 + "," +year2).className != "selected1"){
                element.className = "";
                }
        }
        

    }

}

function search(){
    tickets = document.getElementById('tickets')
    content = "";
    // pick a random number between 5 and 8 
    var num = Math.floor(Math.random() * 4) + 5;
    // pick a random number between 0 and 5 included

    for (i = 0; i < num; i++) {
        content += `
        <div class="ticket">
            <div class="colour">
                
            </div>
            <div class="content">

                    <div class="top-left">
                        <div class="locs">
                            <div class="left">
                                <h2>${location[random(0,5)]}</h2>
                                <h1>IXE</h1>
                            </div>
                            <img class="between" src="https://media.discordapp.net/attachments/809808517568790558/1057686462696525894/image.png">
                            <div class="right">
                                <h2>${location[random(5,10)]}</h2>
                                <h1>IXE</h1>
                            </div>
                        </div>
                    </div>
                    <div class="top-right">
                        <div class="time">
                            12:00
                        </div>
                    </div>

                    <div class="bottom-left">
                        <div class="company">
                        <img class="airline" src="https://media.discordapp.net/attachments/809808517568790558/1057695191483547678/image.png" alt="airline">
                        <h1>PEPSICO SPACE</h1>
                        </div>
                    </div>

                        <div class="duration">
                            3h 14m
                        </div>

            </div>
            <div class = "price">
                <h1 class="colour2">₹ 10,000</h1>
            </div>
        </div>
        `
    }

}







