let more = document.querySelectorAll('.read-more-btn');
for (let i = 0; i < more.length; i++) {
    more[i].addEventListener('click', function () {
        more[i].parentNode.classList.toggle('active');
    });

}

$('.built-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ('<i class="far fa-chevron-left built-pre-arrow"></i>'),
    nextArrow: ('<i class="far fa-chevron-right built-next-arrow"></i>'),
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
});

// Career Part 
$('.crPictures').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// Phone Input 
var input = document.querySelector("#phone");
window.intlTelInput(input,{});

// Partner-slide
$('.res-featuresTwoSlide').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: ('<i class="fa fa-arrow-left partner-pre-arrow"></i>'),
  nextArrow: ('<i class="fa fa-arrow-right partner-next-arrow"></i>'),
  responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
});


// Login Form 
// $('.title a').click(function(){
//   $('.form').animate({height: "toggle", opacity: "toggle"}, "show");
// })
