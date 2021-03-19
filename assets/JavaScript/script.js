// declare global variables
var subBtn = document.querySelector("button")
var brewInfo = document.querySelector("p")

var brewHeader = document.querySelectorAll("h4")
var headerArray = []

var mainDiv = document.getElementById("main"); //Will contain search results

<<<<<<< HEAD
=======
var coords = [];
var map;
>>>>>>> main

// fetch brewery api
function brewMe (e) {

    e.preventDefault();

    var userInput = document.getElementById("input").value
    console.log(userInput);

    var brewApi = "https://api.openbrewerydb.org/breweries?by_city=" + userInput;

    fetch(brewApi)

    .then(function(response){
        console.log(response);
        return response.json()
    })

    .then(function(data){
<<<<<<< HEAD
        console.log(data);
        mainDiv.innerHTML = ""; //Clear previous search results
        renderBreweryResults(data);
    })
}


function renderBreweryResults (data) { //For loop creates new divs to contain brewery information

    for(i=0; i<data.length-1; i++) {

        //Create new elements
        var newDiv1 = document.createElement("div");
        var newDiv2 = document.createElement("div");
        var newDiv3 = document.createElement("div");
        var newH4 = document.createElement("h4");
        var newP = document.createElement("p");

        //Add classes for styling
        newDiv1.classList.add("card");
        newDiv2.classList.add("card-content"); 
        newDiv3.classList.add("content"); 
    
        newDiv1.appendChild(newDiv2);
        newDiv2.appendChild(newDiv3);

        //Insert data from the API call into the new elements
        newH4.innerHTML = data[i].name;
        newP.innerHTML = data[i].street + "<br/>" + data[i].city + ", " + data[i].state + "<br/>" + data[i].postal_code + "<br/><br/> Phone: " + data[i].phone;
    
        newDiv3.appendChild(newH4);
        newDiv3.appendChild(newP);

        mainDiv.appendChild(newDiv1); //Add new elements as children of <main>  
=======
        var filteredData = data.filter((d)=> {
            return !!d.latitude
        })
        console.log(filteredData);
        mainDiv.innerHTML = ""; //Clear previous search results
        renderBreweryResults(filteredData);
        coords = filteredData;
        initMap();
    })
}

function renderBreweryResults (data) { //For loop creates new divs to contain brewery information

    for(i=0; i<data.length-1; i++) {

        //Create new elements
        var newDiv1 = document.createElement("div");
        var newDiv2 = document.createElement("div");
        var newDiv3 = document.createElement("div");
        var newH4 = document.createElement("h4");
        var newP = document.createElement("p");

        //Add classes for styling
        newDiv1.classList.add("card");
        newDiv2.classList.add("card-content"); 
        newDiv3.classList.add("content"); 
    
        newDiv1.appendChild(newDiv2);
        newDiv2.appendChild(newDiv3);

        //Insert data from the API call into the new elements
        newH4.innerHTML = data[i].name;
        newP.innerHTML = data[i].street + "<br/>" + data[i].city + ", " + data[i].state + "<br/>" + data[i].postal_code + "<br/><br/>"  + "<a href='" + data[i].website_url + "'>" + data[i].website_url + "</a>";
    
        newDiv3.appendChild(newH4);
        newDiv3.appendChild(newP);

        mainDiv.appendChild(newDiv1); //Add new elements as children of <main>

>>>>>>> main
    }
}


// event listn for search btn
subBtn.addEventListener("click", brewMe);

// event listn for populated divs
var results = document.querySelector("h4");

function initMap() {

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom:9.5,
        center: { lat: parseFloat(coords[0].latitude), lng: parseFloat(coords[0].longitude)}
    })

    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(coords);
    var locations = coords.map((x)=> {
        return {lat: parseFloat(x.latitude), lng: parseFloat(x.longitude), name: x.name}
    })
    console.log(locations);
    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            title: locations[i].name
        });
    });

    new MarkerClusterer(map, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}
