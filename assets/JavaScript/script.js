// declare global variables
var subBtn = document.querySelector("button")
var brewInfo = document.querySelector("p")

var brewHeader = document.querySelectorAll("h4")
var headerArray = []

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

        // for loop to push header elements into array
        for(var i = 0; i < brewHeader.length; i++) {
            headerArray.push(brewHeader[i]);
        }

        // for loop
        for(var i = 0; i >= data.length[0] && i <= data.length[3]; i++){

            var name = data[i].name
            //forEach to populate header with name
            brewHeader.forEach(myFunction)

            function myFunction(item, index, arr) {
                arr[index] = item.textContent = name
            }

                

        }
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