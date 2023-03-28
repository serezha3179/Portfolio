$('.skills__slider').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    // arrows: false,
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 2,
            // arrows: false,
          }
        } , {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              arrows: false,
            }
          } , {
            breakpoint: 415,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
            }
          }
    ]
});