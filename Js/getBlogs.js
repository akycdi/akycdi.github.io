// Position to show data
const blogPos = document.querySelector("#blog");

// Dev.to username and api
const username = "akycdi";
const api = "https://dev.to/api/articles?";

// Helper function
// Create elements
function createNode(element) {
  return document.createElement(element);
}

// function append element
function append(pareantEl, childEl) {
  return pareantEl.appendChild(childEl);
}

const ul = createNode('ul');
ul.classList.add("blog-feed");

const finalURL = buildURL(username);
console.log(finalURL);
fetch(finalURL)
    .then((response) => response.json())
    .then(posts => {
    //console.log(posts)
        // limiting no of post shown
        posts.length = 5;
        //console.log(posts)
      
        posts.forEach((post) => {
          // creating node elements
          let li = createNode('li'), a = createNode('a');
          let h2 = createNode('h2'), p = createNode('p');
          let small = createNode('small');
          
          // specifying value, attributes and className
          a.target = "_blank";
          p.classList.add("w-info");
          a.href = post.url;
          a.innerText = post.title;
          p.innerText = post.description;
          // Reaction count
          small.innerText = '💕 ' + post.public_reactions_count;
          //appending 
          append(h2, a);
          append(li, h2);
          append(li, p);
          append(li, small);
          append(ul, li);
        })
        // appending to blog post to feed
        append(blogPos, ul);
})
// build url
function buildURL(userName) {
  return `${api}username=${userName}`;
}
