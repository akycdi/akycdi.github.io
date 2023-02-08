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