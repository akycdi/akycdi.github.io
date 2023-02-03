const currentReposDiv = document.getElementById("currentRepos");
const form = document.getElementById("form");
const input = document.getElementById("username");
var currentUser = 'akycdi';


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  currentUser = input.value;
  getRepos(currentUser)
  displayRepos(currentUser);
});

async function getRepos(username) {

  try {

    var response = await fetch(`https://api.github.com/users/${username}/repos`);
    return await response.json();
  }
  catch (error) {
    if (error.status === 404) {
      alert(`Username ${username} not found`);
    } else {
      console.log(error);
    }
  }
}


async function displayRepos(username) {
  const repos = await getRepos(username);
  var cardContainer = document.getElementById('cardcontainer');
  repos.forEach((item) => {
    var columncard = document.createElement('div');
    var card = document.createElement('div')
    var card_inner = document.createElement("div");
    var button = document.createElement('button');
    var h2Name = document.createElement('h6');
    var paragraph = document.createElement('p');
    var canvas = document.createElement('canvas')
    card_inner.className = "card-body"
    card.className = "card cardStyle";
    columncard.className = "col-md-4 col-sm-6 col-lg-3";
    paragraph.appendChild(document.createTextNode(item.description));
    h2Name.appendChild(document.createTextNode(item.name));

    button.type = 'button';
    button.innerHTML = item.name;
    button.className = 'btn btn-primary btn-sm';

    button.onclick = function () {
      window.open(item.html_url)
    };
    card_inner.appendChild(h2Name);
    card_inner.appendChild(paragraph);
    card_inner.appendChild(button);
    card_inner.appendChild(canvas);
    card.appendChild(card_inner);
    columncard.appendChild(card);
    cardContainer.appendChild(columncard);

  });

  // var i = 0;
  // repos.forEach(element => {
  //   console.log(i++);
  //   console.log(element.name);
  //   console.log(element.url);

  // });
}



const carousel = document.querySelector("#carousel");
const images = carousel.querySelectorAll("img");
let currentImageIndex = 0;

setInterval(() => {
  images.forEach((image, index) => {
    if (index === currentImageIndex) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });

  currentImageIndex = currentImageIndex + 1 === images.length ? 0 : currentImageIndex + 1;
}, 5000);


window.addEventListener("load", function () {
  displayRepos(currentUser);
});