
var slider_element = document.getElementsByClassName("banner-slider");
var swiper = null;
Object.entries(slider_element).forEach(entry => {
    slider_options = JSON.parse(entry["1"].getAttribute("data-swiper"))
    myswiper = new Swiper(entry["1"], slider_options);
});

var slider_element = document.getElementsByClassName("gallery-w-slider");
var swiper = null;
Object.entries(slider_element).forEach(entry => {
    slider_options = JSON.parse(entry["1"].getAttribute("data-swiper"))
    myswiper = new Swiper(entry["1"], slider_options);
});

var swiper = new Swiper('.swiper-featured-in', {
    loop:true,
    slidesPerView:"auto",
    allowTouchMove: true,
    grabCursor:true,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev"
      },
      breakpoints: {
        577: {
            "slidesPerView": 2,
            spaceBetween: 20,
        },
        992: {
            "slidesPerView": 3,
            spaceBetween: 30,
        },
        1024: {
            "slidesPerView": 4,
            spaceBetween: 30,
        }
        }
  });