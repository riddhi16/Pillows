// cart drawer
function open_cart(event){
    event.preventDefault();
    console.log("open menu")
    document.getElementsByClassName('cart_drawer')[0].style.right = '0';
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementsByClassName("overlay")[0].style.display = "block";
}

function close_cart(event){
     event.preventDefault();
    console.log("close menu")
    document.getElementsByClassName('cart_drawer')[0].style.right = '-100%';
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
    document.getElementsByClassName("overlay")[0].style.display="none";
}