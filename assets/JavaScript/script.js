// declare global variables
var subBtn = document.querySelector("button")
var brewInfo = document.querySelector("p")

var brewHeader = document.querySelectorAll("h4")
var headerArray = []

var mainDiv = document.getElementById("main");


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

        mainDiv.appendChild(newDiv1); //Add new divs as children of <main>  
    }
}

// pull name, street, city, state, postal_code, website_url, phone
//data[0].name 

// create div elements

// pull location details

// append location details to div element

// append div to container

// event listn for search btn
subBtn.addEventListener("click", brewMe);