const _ = require('lodash');

const fetchRepoData = (repo) => {
  var data = {key: 'a720778ddde2c87f0e92572e2c42bdc0', q: repo.html_url};

  fetch('https://api.linkpreview.net', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(response => {
      const container = document.createElement('div');
      container.classList.add('container');

      const box = document.createElement('div');
      box.classList.add('box');
      box.style.width = '300px';
      container.appendChild(box);

      const image = document.createElement('img');
      image.id = 'myimage';
      image.src = response.image;
      box.appendChild(image);

      const content = document.createElement('div');
      content.classList.add('is-clipped');
      box.appendChild(content);

      const title = document.createElement('div');
      title.id = 'mytitle';
      title.classList.add('has-text-weight-bold');
      title.innerHTML = response.title;
      content.appendChild(title);

      const description = document.createElement('div');
      description.id = 'mydescription';
      description.classList.add('mt-2');
      description.innerHTML = response.description;
      content.appendChild(description);

      const link = document.createElement('a');
      link.id = 'myurl';
      link.classList.add('mt-2', 'is-size-7');
      link.innerHTML = response.url;
      link.href = response.url;
      content.appendChild(link);

      document.body.appendChild(container);
    });
};

fetch(`https://api.github.com/users/akycdi/repos`)
  .then(response => response.json())
  .then(repos => {
    _.throttle(() => {
      repos.forEach(repo => {
        fetchRepoData(repo);
      });
    }, 1000);
  });