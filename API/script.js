// // API = Application programming interface

// https: hypertext transfer protocol secure

// Different APIs:
//     - Fetch API
//     - Axios API
//     - XMLHHttpRequest API

// // Web services - One application can make a call to another application through internet
//           ie: ecommerce site making a call to bank for payment

// types: XML based: SOAP web service
//                 : RESTful web service - request and response in JSON/XML/text/html/JS format


function getData() {
    const url  = "https://jsonplaceholder.typicode.com/users"

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
}

// http calls - GET, POST, PUT, DELETE

function getDataWithRequest () {
    const request = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/users"
    request.open('GET', url);
    request.send();
    request.onload = () => {
        console.log(request.response)
    }
}