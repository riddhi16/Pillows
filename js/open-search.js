function openSearchbar(event){
    console.log("close")
    event.preventDefault();
    
    let header_height = document.getElementById("header").clientHeight;
    console.log(header_height);
    document.getElementsByClassName("search-modal")[0].style.top = `${header_height}px`;
}

function closeSearchbar(event){
    console.log("close")
    event.preventDefault();
    document.getElementsByClassName("search-modal")[0].style.top = "-200%";
}


