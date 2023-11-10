function opendrawer(event){
    event.preventDefault();
    document.getElementsByClassName("filter-drawer")[0].style.top = "0";
    document.getElementsByClassName("overlay")[0].style.display = "block";
   
}
function closedrawer(event) {
   
    event.preventDefault();
    document.getElementsByClassName("filter-drawer")[0].style.top = "-200%";
    document.getElementsByClassName("overlay")[0].style.display = "none";
  
}

function opensortdrawer(event){
    event.preventDefault();
    document.getElementsByClassName("sort-drawer")[0].style.top = "0";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementsByClassName("overlay")[0].style.display = "block";
  console.log("called")
}
function closesortdrawer(event) {
   
    event.preventDefault();
    document.getElementsByClassName("sort-drawer")[0].style.top = "-200%";
    document.getElementsByClassName("overlay")[0].style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
}
