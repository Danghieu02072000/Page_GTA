$(document).ready(function () {
      $(".owl-theme").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
      });

      $(".owl-theme-2").owlCarousel({
        items: 3,
        loop: true,
        responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:false,
          },
          1000:{
              items:3,
              nav:false,
              margin: 5,
              loop:true,
          }
      }
      });
      $(".owl-theme-3").owlCarousel({
        items: 3,
        loop: true,
        responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:false,
          },
          1000:{
              items:3,
              nav:false,
              loop:true,
              margin:10,
          }
      }
      });
});

