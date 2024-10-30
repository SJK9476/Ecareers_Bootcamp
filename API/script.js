// Web Services - One application makes a call to another application through internet
// types: Xml based: SOAP web service
//                 : RESTful Web service : json/xml/text/html
//let users = []
document.getElementById('blogForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const url = 'http://127.0.0.1:5002/data'
    fetch(url)
    .then(response => response.json())
     .then(data => {

        
         if(data.length > 0){
            const newTable = document.createElement("table")
            newTable.innerHTML = "<thead><th>Employee Name</th><th>Employee Department</th><th>Salary</th></thead>"
             data.forEach((user) =>{
                const newRow = document.createElement("tr")
                const tdName = document.createElement("td")
                const tdDepartment = document.createElement("td")
                const tdSalary = document.createElement("td")
                tdName.textContent = user.emp_name
                tdDepartment.textContent = user.emp_dept
                tdSalary.textContent = user.emp_salary
                newRow.appendChild(tdName)
                newRow.appendChild(tdDepartment)
                newRow.appendChild(tdSalary)
                newTable.appendChild(newRow)
            })
            let userContainer = document.getElementById('users')
            if (userContainer.innerHTML === '') {
             userContainer.appendChild(newTable)}
             else {
                 return;
             }
         }
     })
    .catch(error => {
        console.log(error)
    })
    //renderPost()
   // renderTable()
})    

// function renderTable(){
//     const newTable = document.createElement("table")
//     newTable.innerHTML = "<thead><th>User Name</th><th>Email</th></thead>"
//     users.forEach((user) =>{
//         const newRow = document.createElement("tr")
//         const tdName = document.createElement("td")
//         const tdEmail = document.createElement("td")
//         tdName.textContent = user.name
//         tdEmail.textContent = user.email
//         newRow.appendChild(tdName)
//         newRow.appendChild(tdEmail)
//         newTable.appendChild(newRow)
//     })
//     let userContainer = document.getElementById('users')
//     userContainer.appendChild(newTable)
// }

// function renderPost(){
   
//     let postContainer = document.getElementById('users')
//     postContainer.innerHTML = ''
//     users.forEach((user) =>{
//         let postElement = document.createElement('div')
//         postElement.className = 'card mb-3'
    
//         postElement.innerHTML = `
//             <div class='card-body'>
//                 <h3 class="card-title">${user.name}</h3>
//                 <p class="card-text">${user.email}</p>
//                 <p class="card-text">${user.address.street}</p>
//                 <p class="card-text">${user.website}</p>
//             </div>    
//         `
//         postContainer.appendChild(postElement)
//     })
// }
// Promise : resolved/rejected
// http methods: GET, PUT, DELETE
