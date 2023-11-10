// MAIN IMAGE SLIDER
    var swiperOptions = {
        centeredSlides: false,
        observer: true,
        observeParents: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination'
        }
  };
  var Imageswiper = new Swiper(".main_product", swiperOptions);
//  VARIANT IAMGE SLIDER
    var productOptions = {
        loop:true,
        slidesPerView:6,
        spaceBetween: 10,
        allowTouchMove: true,
        grabCursor:true,
        navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev"
        }
    };
    var swiper = new Swiper(".variant_product", productOptions);

function imageclick(event){
        let variantid = event.currentTarget.closest('div').getAttribute('data-var-imageID');
        console.log(variantid);
        let main_pro = document.getElementById(variantid);
        let main_index = main_pro.getAttribute('data-index');
        console.log("hh",main_index);
        Imageswiper.slideTo(main_index,1000,true);
}

