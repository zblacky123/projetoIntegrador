// Hamburguer Menu

const hamburger = document.querySelector(".hamburger")
const nav_menu = document.querySelector(".nav-menu")

hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav_menu.classList.remove("active");
}))

// Search Bar

let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let search = document.querySelector(".search");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});