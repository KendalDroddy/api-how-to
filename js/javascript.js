//Variables used for url generation
// console.log("meow");
// var urlFirst = "http://api.openweathermap.org/data/2.5/weather?";
// var urlSecond = "&appid=fa7d80c48643dfadde2cced1b1be6ca1";
 var urlThird = "https://developer.nps.gov/api/v0/alerts?parkCode=yose,yell";


// var req = new XMLHttpRequest();
// req.open("GET", urlThird, false);

// req.setRequestHeader('Authorization', '6A543129-1D03-4C0D-95FC-0D8010869FFC');
// req.send(null);
// var response = JSON.parse(req.responseText);
// console.log(response);



var requestMethod = "GET";
var queryURL = "https://developer.nps.gov/api/v0/";
var queryString = "alerts?parkCode=yose";

var request = new XMLHttpRequest();
request.open(requestMethod, urlThird , true);
request.setRequestHeader('Authorization', '6A543129-1D03-4C0D-95FC-0D8010869FFC');
request.addEventListener("load", function() {
    var response = JSON.parse(request.responseText);
    console.log(response);
});

request.send(null);