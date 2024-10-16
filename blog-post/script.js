const posts = [];
let currentPostIndex = null



document.getElementById('blogForm').addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let wordCount = content.split(' ').length;

    if (currentPostIndex !== null) {
        posts[currentPostIndex] = { title, content };
        currentPostIndex = null;
    } else {

        if (wordCount < 20) {
            alert('Content must be at least 20 words');
            return;
        } else {
            posts.push({ title, content });
        }
        
    }

        renderPost();
        document.getElementById('blogForm').reset();

})

function renderPost(){
   
    let postContainer = document.getElementById('posts')
    postContainer.innerHTML = ''
    posts.forEach((post, index) =>{
        let postElement = document.createElement('div')
        postElement.className = 'card mb-3'
    
        postElement.innerHTML = `
            <div class='card-body'>
                <h3 clss="card-title">${post.title}</h3>
                <p class="card-text">${post.content}</p>
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