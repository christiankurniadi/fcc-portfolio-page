window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("active-scroll", window.scrollY > 0);
});
