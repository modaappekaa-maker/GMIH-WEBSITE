const menu = document.querySelector(".menu");
const navlinks = document.querySelector(".navlinks");

if (menu && navlinks) {
  menu.addEventListener("click", () => {
    navlinks.classList.toggle("open");
  });

  navlinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navlinks.classList.remove("open"));
  });
}
