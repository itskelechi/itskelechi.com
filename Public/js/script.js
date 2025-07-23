var year = new Date().getFullYear();
var copy = document.getElementById('copyright')
copy.innerHTML = `&copy; ${year} Kelechi Ariwodo. All Rights Reserved.`;

var lastUpdated = document.lastModified;
var dateTime = lastUpdated.split(' ');
var date = dateTime[0];

var time = formatTime(lastUpdated);

var element = document.getElementById("last");
element.innerHTML = "<smaller>Last Updated: <p>"+ time + "</p> </smaller><p>"+ date;

function formatTime(d) {
    const date = new Date (d);
    console.log (date);

    const hours = date.getHours();
    const AMPM = hours >= 12? 'PM' : 'AM';
    const after12 = hours % 12 || 12;
    const mins = date.getMinutes().toString().padStart(2,'0');

    console.log(`Date: ${after12}:${mins} ${AMPM}`)
    return `${after12}:${mins} ${AMPM}`
}