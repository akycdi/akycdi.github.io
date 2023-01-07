var username = document.getElementById("userID");

document.getElementById("userID").addEventListener("click", function () {
  form.submit();
});

console.log(username);
async function getRepos(username) {
	const response = await fetch(`https://api.github.com/users/${username}/repos`);
	const data = await response.json();
	return data;
  }
  
  async function main() {
	const repos = await getRepos("octocat");
	console.log(repos);
  }
  
  main();