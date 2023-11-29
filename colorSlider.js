// Swiper testimonial
const swiperTestimonial = new Swiper('.swiper.is-testimonial', {
  // Optional parameters
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 16,
  grabCursor: true,
  speed: 800,


  // And if we need scrollbar
     scrollbar: {
    el: ".swiper-drag-wrapper.is-testimonial",
      draggable: true,
      dragClass: "swiper-drag.is-testimonial",
      snapOnRelease: true
  }
});



// Swiper About image gallery
const swiperPrive = new Swiper('.swiper.is-prive', {
  // Optional parameters
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 16,
  grabCursor: true,
  speed: 800,


  // And if we need scrollbar
     scrollbar: {
    el: ".swiper-drag-wrapper.is-prive",
      draggable: true,
      dragClass: "swiper-drag.is-prive",
      snapOnRelease: true
  }
});



