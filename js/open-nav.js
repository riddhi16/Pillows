function openNav(event) {
    console.log("open")
    event.preventDefault();
    document.getElementsByClassName("accordian_mobile")[0].style.left = "0";
    document.getElementsByClassName("overlay")[0].style.display = "block";
}
function closeNav(event) {
    console.log("close")
    event.preventDefault();
    document.getElementsByClassName("accordian_mobile")[0].style.left = "-200%";
    document.getElementsByClassName("overlay")[0].style.display = "none";
}
