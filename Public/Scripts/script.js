const year = new Date().getFullYear();
var copy = document.getElementById('copyright')
copy.innerHTML = `&copy; ${year} Kelechi Ariwodo. All Rights Reserved.`;

var lastUpdated = document.lastModified;
var element = document.getElementById("last");
element.innerHTML = "<small>Last Updated: " +lastUpdated + "</small>";
        
