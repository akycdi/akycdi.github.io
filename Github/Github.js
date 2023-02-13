const username = akycdi;
async function getRepos(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const repos = await response.json();
  return repos;
}

async function displayRepos(username) {
  const repos = await getRepos(username);
  const repoContainer = document.querySelector("#repo-container");
  const usernameEl = document.querySelector("#username");
  usernameEl.textContent = username;
  const repoEl = document.querySelector("#repos");
  repoEl.innerHTML = "";
  repos.forEach(repo => {
    const repoEl = document.createElement("div");
    repoEl.innerHTML = `
      <h3><a href="${repo.html_url}">${repo.name}</a></h3>
      <p>${repo.description}</p>
    `;
    repoContainer.appendChild(repoEl);
  });
}