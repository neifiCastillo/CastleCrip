let menu = document.querySelector("#menu");
let toggleicon = document.querySelector("#toggle-icon");

toggleicon.addEventListener("click", function() {
    menu.classList.toggle("menu_on");
});