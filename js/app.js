



function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            let postlayout = document.getElementById('post-layout')
            userPost = data
            let html = "";
            data.forEach(e => {
                html += `
          <div class="col-md-4 mb-4">
          <div class="card h-100">
          <div class="card-body">
            <h5 class="post-title">${e.title}</h5>
            <p class="post-body">${e.body}</p>
            <div class ="d-flex justify-content-end">
            <button class= "btn btn-danger stretched-link" type='submit'
            onclick=' content(${e.id})'>Push</button>
            </div>
          </div>
        </div>
      </div>
                `
                postlayout.innerHTML = html

            });

        })

}

getPosts();


function content(id) {
    localStorage.setItem('poster', id);
    post = localStorage.getItem('poster');
    console.log(post)

    fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
        .then(response => response.json())
        .then((e) => {
            // console.log(e)
            let postlayout = document.getElementById('post-layout')
            let html = "";

            html = `
          <div class="col-md-4 mb-4">
          <div class="card h-100">
          <div class="card-body">
            <h5 class="post-title">${e.title}</h5>
            <p class="post-body">${e.body}</p>
            <div class ="d-flex justify-content-end">
            <button class= "btn btn-danger cc" type='submit'
            onclick='post(${e.id})'>Push</button>
            </div>
          </div>
        </div>
      </div>
                `
            postlayout.innerHTML = html

        });

}