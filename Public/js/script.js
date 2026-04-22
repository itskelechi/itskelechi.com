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


function toggleMode(mode) {
    const light = document.getElementById('viewLightMode');
    const dark = document.getElementById('viewDarkMode');
    const arte = document.getElementById('viewArteMode');

    if (mode === 'light') {
        light.classList.add('active')
        document.documentElement.dataset.theme = 'light';
    } else if (mode === 'dark') {
        dark.classList.add('active')
        document.documentElement.dataset.theme = 'dark';
    } else if (mode === 'arte') {
        arte.classList.add('active')
        document.documentElement.dataset.theme = 'arte';
    }
    localStorage.setItem('theme', mode);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    toggleMode(savedTheme);
});