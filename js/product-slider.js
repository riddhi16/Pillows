var slider_element = document.getElementsByClassName("you-may-like");
var swiper = null;
Object.entries(slider_element).forEach(entry => {
    slider_options = JSON.parse(entry["1"].getAttribute("data-swiper"))
    myswiper = new Swiper(entry["1"], slider_options);
});
