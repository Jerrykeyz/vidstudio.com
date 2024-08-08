let menu = document.querySelector(".fa-bars")
let sideBar = document.querySelector(".sidebar")
let conTainer = document.querySelector(".container")
menu.onclick = function(){
    sideBar.classList.toggle("small-sidebar");
    conTainer.classList.toogle("large-container");
}