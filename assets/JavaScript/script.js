// declare global variables
var subBtn = document.querySelector("button")
// var userInput = document.getElementById("input").value
// console.log(userInput);
// var userLoc = userInput.value
// console.log(userLoc);


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
    })
}

// pull name, street, city, state, postal_code, website_url, phone
//data[0].name 

// create div elements

// pull location details

// append location details to div element

// append div to container

// event listn for search btn
subBtn.addEventListener("click", brewMe);