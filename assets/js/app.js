window.onscroll = function() {
    let top = window.pageYOffset || document.documentElement.scrollTop,
        header = document.querySelector("#header");
    if (top > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}