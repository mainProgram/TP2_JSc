const sidebar = document.getElementById("sidebar");
const burgerMenu = document.getElementById("burgerMenu");
const home = document.getElementById("home");
const search = document.getElementById("search");

burgerMenu.addEventListener("click" , () =>{
    sidebar.classList.toggle("show-nav");
})