let search = document.querySelector(".search-box");
let serchIcon = document.querySelector("#search-icon");
serchIcon.onclick = ()=> {
    search.classList.toggle("active");
    serchIcon.classList.toggle("clicke");
    navbar.classList.remove("active");
};
let navbar = document.querySelector(".navbar");
document.querySelector("#menu-icon").onclick = ()=> {
    navbar.classList.toggle("active");
    search.classList.remove("active");
    serchIcon.classList.remove("clicke");
};

window.onscroll = () => {
    navbar.classList.remove("active");
    search.classList.remove("active");
    serchIcon.classList.remove("clicke");
}

let header = document.querySelector("header");
window.addEventListener("scroll", ()=>{
    header.classList.toggle("shadow", window.scrollY > 0);
});