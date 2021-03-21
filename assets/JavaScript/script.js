// declare global variables
var subBtn = document.querySelector("button")
var brewInfo = document.querySelector("p")

var brewHeader = document.querySelectorAll("h4")
var headerArray = []

var mainDiv = document.getElementById("main"); //Will contain search results

// RENAMED "COORDS" FOR MORE INTUITIVE CODE
var brewArray = [];
var map;

var searchItemNum;

// fetch brewery api
function brewMe (e) {

    e.preventDefault();

    var userInput = document.getElementById("input").value
    // console.log(userInput);

    var brewApi = "https://api.openbrewerydb.org/breweries?by_city=" + userInput;

    fetch(brewApi)

    .then(function(response){
        // console.log(response);
        return response.json()
    })

    .then(function(data){
        var filteredData = data.filter((d)=> {
            return !!d.latitude
        })
        // console.log(filteredData);
        mainDiv.innerHTML = ""; //Clear previous search results
        searchItemNum = 1; //Numbers start at 1 for each search
        renderBreweryResults(filteredData);
        brewArray = filteredData;
        initMap();
    })
}

function renderBreweryResults (data) { //For loop creates new divs to contain brewery information

    for(i=0; i<data.length; i++) {

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
        newH4.innerHTML = searchItemNum + ". " + data[i].name;
        newP.innerHTML = data[i].street + "<br/>" + data[i].city + ", " + data[i].state + "<br/>" + data[i].postal_code + "<br/><br/>"  + "<a href='" + data[i].website_url + "'>" + data[i].website_url + "</a>";
    
        newDiv3.appendChild(newH4);
        newDiv3.appendChild(newP);

        mainDiv.appendChild(newDiv1); //Add new elements as children of <main>

        searchItemNum ++;
    }
}


// event listn for search btn
subBtn.addEventListener("click", brewMe);

// event listn for populated divs
var results = document.querySelector("h4");

function initMap() {

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom:10,
        center: { lat: parseFloat(brewArray[0].latitude), lng: parseFloat(brewArray[0].longitude)}
    })
    // console.log(brewArray);

    const labels = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];

    var locations = brewArray.map((x)=> {
        return {lat: parseFloat(x.latitude), lng: parseFloat(x.longitude), name: x.name}
    })
    // console.log(locations);

    // displaying markers using parsed lat/long values
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

    // INFOWINDOW CODE TO DEBUG
    // // VARIABLE BREWERYNAME FOR INFOWINDO
    // var breweryName = brewArray.map((x)=> {
    //     return {name: x.name}
    // });

    // //VARIABLE WINDOWTEXT FOR WHAT WILL SHOW IN INFOWINDOW
    // var windowText
    // var infoWindow
    // for (var i = 0; i < breweryName.length; i++){
    //     windowText = breweryName[i].name
    //     console.log(windowText);

    //     infoWindow = new google.maps.InfoWindow({
    //         content: windowText
    //     });

    //     // EVENT LISTENER FOR MARKERS
    //     markers.forEach(function(marker){
    //         marker.addListener("click", function(){
    //             console.log("what");
    //             infoWindow.open(map, marker);
    //         });
    //     });
    // };

}


//changed header background and styling
// made search results into an ordered list