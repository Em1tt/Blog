window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll > 0){
        document.querySelector("nav").classList.add("active");
    }else{
        document.querySelector("nav").classList.remove("active");
    }
});