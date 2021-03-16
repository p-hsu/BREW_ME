// declare global variables
var subBtn = document.querySelector("button")
var userInput = document.querySelector("input")
var userLoc = userInput.value()

// fetch brewery api
function brewMe (e) {
    e.preventDefault();
    var brewApi = "https://api.openbrewerydb.org/breweries?by_city=" + userLoc;

    fetch(brewApi)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
    })
}

// create div elements

// pull location details

// append location details to div element

// append div to container

// event listn for search btn
subBtn.addEventListener("click", brewMe);