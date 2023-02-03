const username = "akycdi";
const url = `https://dev.to/api/articles?username=${username}`;

const fetchArticles = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    console.log(data);
  }
};

const filterArticles = searchValue => {
  const articles = document.querySelectorAll(".article");
  const filteredArticles = Array.from(articles).filter(article => {
    const title = article.querySelector("h3").textContent;
    return title.toLowerCase().includes(searchValue.toLowerCase());
  });
  // render the filtered articles
  renderFilteredArticles(filteredArticles);
};

const renderFilteredArticles = filteredArticles => {
  const articles = document.querySelectorAll(".article");
  articles.forEach(article => {
    article.style.display = "none";
  });
  filteredArticles.forEach(article => {
    article.style.display = "block";
  });
};

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", event => {
  event.preventDefault();
  const searchValue = searchInput.value;
  filterArticles(searchValue);
});

fetchArticles().then(articles => {
  renderArticles(articles);
});
const renderArticles = articles => {
  articles.forEach(article => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");
    articleElement.innerHTML = `
      <h3>${article.title}</h3>
      <img src="${article.cover_image}" alt="Article Cover Image">
      <p>${article.description}</p>
    `;
    document.querySelector("#articles-container").appendChild(articleElement);
  });
};

const showAllButton = document.querySelector("#show-all-button");
showAllButton.addEventListener("click", event => {
  event.preventDefault();
  const articles = document.querySelectorAll(".article");
  articles.forEach(article => {
    article.style.display = "block";
  });
});

