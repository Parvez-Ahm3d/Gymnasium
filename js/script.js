
$(function(){

    'use strict'

    // Banner Slider Part

    
  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots:true,
  });

  // Team Slider Part

    
  $('.team_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1

        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1

        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  
  // Venu box
  
  $('.venobox').venobox(); 
  
  });


  // testimonial Slider Part


  $('.test_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,
  responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  //Counter_up Part

  $('.counter').counterUp({
      delay: 10,
      time: 1000,
  });


    // Classes Slider Part

    
    $('.Classes_slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow:'<i class="fas fa-chevron-right nxt_arr"></i>',
      prevArrow:'<i class="fas fa-chevron-left prv_arr"></i>',
      dots:false,
      centerMode: true,
      centerPadding: 0,
      arrows:false,
      responsive: [
        {
          breakpoint: 1199.98,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows:false,
          }
        },
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows:false,
          }
        },
        {
          breakpoint: 776.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:false,
            
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:false,
          }
        }
      ]
    });











