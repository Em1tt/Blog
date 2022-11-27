window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll > 0){
        document.querySelector("nav").classList.add("active");
    }else{
        document.querySelector("nav").classList.remove("active");
    }
});

//Control Navbar
const list = document.querySelectorAll(".nav-controller");
for (const item of list){
    item.addEventListener("click", () => {
        document.querySelector(".url-wrapper").classList.toggle("active");
    })
}