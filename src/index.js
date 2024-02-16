const content = document.getElementById('content');

const routes = {
  '/': 'This is the home page.',
  '/about': 'This is the about page.',
  '/contact': 'This is the contact page.',
};

const router = () => {
  const path = window.location.hash.substring(1);
  content.innerHTML = routes[path];
};

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
