const menu = document.querySelector('.menu');
const navlinks = document.querySelector('.navlinks');
if (menu && navlinks) {
  menu.addEventListener('click', () => {
    const open = navlinks.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  navlinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navlinks.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    });
  });
}
