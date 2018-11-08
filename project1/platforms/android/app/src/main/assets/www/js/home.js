console.log("home.js javascript file loaded")

document.addEventListener("deviceReady", users);

function abc() {
    console.log("abc!!!!");
    alert("abc!!!!");
}

var slider_content = document.getElementById("box");
document.getElementById("prewButton").addEventListener("click", minusSlides);
document.getElementById("nextButton").addEventListener("click", plusSlides);

// ====================click on profile============
document.getElementById("profile").addEventListener("click", profile);
function profile(){
  window.location.replace("profile.html");
}

// ======================cross button and click button==========
document.getElementById("cross").addEventListener("click", cross);
function cross()
{
alert("cross button pressed");
}
document.getElementById("heart").addEventListener("click", heart);
function heart()
{
alert("heart button pressed");
}


document.getElementById("check");
var city = "unknown";
currentLocation();
var userNearMe = [];
var userIHate = [];
var database = [{
        "id": 1,
        "name": "Lily Pattinson",
        "locations": "Toronto",
        "image": "img/pic1.jpg",
        "dob": "1/1/1990",
        "contact": "6474000472"
    },
    {
        "id": 2,
        "name": "angel",
        "locations": "Toronto",
        "image": "img/pic2.jpg",
        "dob": "1/4/1988",
        "contact": "6474000472"
    },
    {
        "id": 3,
        "name": "ketty perry",
        "locations": "Toronto",
        "image": "img/pic3.jpg",
        "dob": "4/1/1983",
        "contact": "6474000472"
    },
    {
        "id": 4,
        "name": "Jasmine",
        "locations": "Brampton",
        "image": "img/pic4.jpg",
        "dob": "1/1/1990",
        "contact": "6474000472"
    },
    {
        "id": 5,
        "name": "Priyanka",
        "locations": "Toronto",
        "image": "img/pic5.jpg",
        "dob": "67/9/1994",
        "contact": "6474000472"
    },
    {
        "id": 6,
        "name": "Deepika",
        "locations": "Toronto",
        "image": "img/pic6.jpg",
        "dob": "4/8/1997",
        "contact": "6474000472"
    },
    {
        "id": 7,
        "name": "hermoine",
        "locations": "Toronto",
        "image": "img/pic7.jpg",
        "dob": "1/8/1990",
        "contact": "6474000472"
    },
    {
        "id": 8,
        "name": "robert Pattinson",
        "locations": "Toronto",
        "image": "img/pic8.jpg",
        "dob": "1/1/1990",
        "contact": "4165688684"
    },
    {
        "id": 9,
        "name": "Stefen",
        "locations": "Brampton",
        "image": "img/pic9.jpg",
        "dob": "6/8/1998",
        "contact": "4165688684"
    },
    {
        "id": 10,
        "name": "Denial",
        "locations": "Toronto",
        "image": "img/pic10.jpg",
        "dob": "1/2/1991",
        "contact": "6474000472"
    },
    {
        "id": 11,
        "name": "Sam",
        "locations": "Toronto",
        "image": "img/pic11.jpg",
        "dob": "1/1/1990",
        "contact": "6474000472"
    },
    {
        "id": 12,
        "name": "Olaf",
        "locations": "Toronto",
        "image": "img/pic12.jpg",
        "dob": "8/9/1990",
        "contact": "6474000472"
    },
    {
        "id": 13,
        "name": "John",
        "locations": "Toronto",
        "image": "img/pic13.jpg",
        "dob": "9/5/1990",
        "contact": "6474000472"
    },
    {
        "id": 14,
        "name": "Brad Pitt",
        "locations": "Toronto",
        "image": "img/pic14.jpg",
        "dob": "1/5/1990",
        "contact": "6474000472"
    }
];

// var slideIndex = 1;
// var slideIndex = 1;

var results = "";

//var image = ["img/pic1.jpg","img/pic2.jpg","img/pic3.jpg","img/pic4.jpg","img/pic5.jpg","img/pic6.jpg","img/pic7.jpg","img/pic8.jpg","img/pic9.jpg","img/pic10.jpg"];
var image = database.length;
var i = image.length;
var a = document.getElementById("img1");
//a.src = image[0];

function users() {
    var y = 0;
    alert("usr start");
    console.log("usr start");

    currentLocation();
    alert(database[3]["locations"]);
    for (var x = 0; x <= database.length; x++) {

        if (city == database[x]["locations"]) {
            console.log(database[x]["locations"]);
            alert(database[x]["location"]);
            userNearMe[y].push(database[x]);
            y++;
        }
    }

}

function plusSlides() {
    alert("plus pressed:");
    if (i < image) {
        i = i + 1;
    } else {
        i = 1;
    }
    alert(i);
    alert(database[i - 1]["image"]);
    a.src = database[i - 1]["image"];
    //a.src = userNearMe[i-1]["image"];
    document.getElementById("check").innerHTML +=
        "<p> Name: " +
        database[i - 1]["name"] +
        "<br>" +
        "Location: " +
        database[i - 1]["locations"] +
        "<br>" +
        "Birthdate: " +
        database[i - 1]["dob"] +
        "</p>";

    //slider_content.innerHTML = "<img src="+image[i-1]+".jpg"; 
}

function minusSlides() {
    alert("minus pressed:");
    if (i < image + 1) {
        if (i > 1) {
            i = i - 1;
        }
    } else {
        i = image;
    }
    alert(i);
    alert(database[i - 1]["image"]);
    a.src = database[i - 1]["image"];
    document.getElementById("check").innerHTML +=
        "<p> Name : " +
        database[i - 1]["name"] +
        "<br>" +
        "Location : " +
        database[i - 1]["locations"] +
        "<br>" +
        "Birthdate : " +
        database[i - 1]["dob"] +
        "</p>";

}

function currentLocation() {

    var xhr = new XMLHttpRequest
    xhr.open('GET', 'https://geoip-db.com/jsonp/');
    xhr.send(null);
    xhr.onreadystatechange = function() {
        console.log("coming back!");
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                console.log(xhr.responseText); // 'This is the returned text.'
                //getting string from net
                var response = xhr.responseText;
                var r = JSON.stringify(response);
                var x = response.substring(9, response.lastIndexOf(')'));

                var z = JSON.parse(x);
                console.log(z["city"]);
                city = z["city"];
            } else {
                console.log('Error: ' + xhr.status);
                city = "Toronto";
            }
        }
    }
}