let posts
let currentPostIndex = null

function retrieveData() {
    const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then(response => response.json())
    .then(data => {
        posts = data
        console.log(data)
        loadPosts()
    })
    .catch(error => {
        console.log(error)
    })
}

retrieveData()

function loadPosts(){
   
    let postContainer = document.getElementById('posts')
    postContainer.innerHTML = ''
    posts.forEach((post, index) =>{
        let postElement = document.createElement('div')
        postElement.className = 'card mb-3'
    
        postElement.innerHTML = `
            <div class='card-body'>
                <h3 clss="card-title">${post.name}</h3>
                <p class="card-text">${post.username}</p>
                <p class="card-text">${post.email}</p>
                <p class="card-text">${post.address.suite}</p>
                <p class="card-text">${post.phone}</p>
                <p class="card-text">${post.website}</p>
                <button class="btn btn-secondary" onclick="editPost(${index})">Edit</button>
                <button class="btn btn-danger" onclick="deletePost(${index})">Delete</button>
            </div>    
        `
        postContainer.appendChild(postElement)
    })
}


function editPost(index) {
    currentPostIndex = index
    document.getElementById('title').value = posts[index].title
    document.getElementById('content').value = posts[index].content
}


function deletePost(index) {
    currentPostIndex = index
    posts.splice(index, 1)
    renderPost()
}