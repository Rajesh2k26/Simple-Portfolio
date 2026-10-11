const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const projectsContainer = document.querySelector('#github-projects');
fetch('https://api.github.com/users/Rajesh2k26/repos?sort=updated&per_page=6')
  .then((response) => {
    if (!response.ok) throw new Error('GitHub projects could not be loaded.');
    return response.json();
  })
  .then((projects) => {
    const publicProjects = projects.filter((project) => !project.fork).slice(0, 6);
    if (publicProjects.length === 0) throw new Error('No public projects found.');
    projectsContainer.innerHTML = '';

    publicProjects.forEach((project) => {
      const card = document.createElement('article');
      card.className = 'github-project';
      const link = document.createElement('a');
      link.href = project.html_url;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.className = 'github-project-link';
      const name = document.createElement('h3');
      name.textContent = project.name.replace(/[-_]/g, ' ');
      const description = document.createElement('p');
      description.textContent = project.description || 'Explore this project on GitHub.';
      const details = document.createElement('span');
      details.className = 'project-language';
      details.textContent = [project.language, `★ ${project.stargazers_count}`].filter(Boolean).join(' · ');
      link.append(name, description, details);
      const arrow = document.createElement('span');
      arrow.className = 'github-arrow';
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '↗';
      card.append(link, arrow);
      projectsContainer.append(card);
    });
  })
  .catch(() => {
    projectsContainer.innerHTML = '<p class="project-note">Projects could not be loaded right now. <a href="https://github.com/Rajesh2k26" target="_blank" rel="noreferrer">Visit my GitHub profile ↗</a></p>';
  });
