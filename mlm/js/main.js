jQuery(function($){$(document).ready(()=>{

  console.log("READY")

  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    nav: true,
    center: true,
    margin: 10,
    responsive:{
      0:{
        items:2
      },
      900:{
        items:3
      }
    }
  });
})})