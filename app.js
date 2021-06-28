var txtInput = document.querySelector("#input");
var btnTranslate = document.querySelector("#btn");
var outputDiv = document.querySelector("#output");

var serverURL = "";


btnTranslate.addEventListener("click", clickHandler);

function clickHandler() {

    // var inputText = txtInput.value;

    // console.log("clicked!")

    fetch(serverURL)
     .then(response => response.json())
     .then(json => {

        outputDiv.innerText = "Kaustubh";
     })

     .catch(errorHandler)
}

function errorHandler(error) {

    console.log("error occured", error)
    alert("Something wrong with server! Try again after some time");

}