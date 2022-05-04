$(document).ready(function () {

  $('.sinlge-product-big__slider').slick({
      asNavFor: '.sinlge-product-navbar-slider',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      arrows: false,
      breakpoint: 969,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              asNavFor: null,
            }
          }
        ]
   });

  if ($(window).width() <= '450'){
    $('.reviews-slide .reviews-block').unwrap()
    $('.projects-about-slide .projects-block').unwrap()

    $('.novelties-row').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      speed: 700,
      variableWidth: true,
    })

    $('.chain-row').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      speed: 700,
      variableWidth: true,
    })
    
    $('.reviews-page-row').addClass('reviews-slider');
    
    $('.certificates-row').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      speed: 700,
      fade: true,
      cssEase: 'linear',
      prevArrow: $('.certificates-row-slider-arrow__prev'),
      nextArrow: $('.certificates-row-slider-arrow__next'),
   });

    $('.sinlge-product-navbar-slide').on('click', function() {
      let parent = $(this).closest('.sinlge-product-navbar-slider');
      let slider_parent = $(parent).children('.sinlge-product-navbar-slide');
      let index_slide = $(slider_parent).index(this);
      let slider_single = $('.sinlge-product-big__slider');
      $(slider_single).slick('slickGoTo', index_slide);
    })
  }
  else{
    $('.sinlge-product-navbar-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
        vertical: true,
        swipe: false,
        //arrows: true,
        prevArrow: $('.sinlge-product-arrow_prev'),
        nextArrow: $('.sinlge-product-arrow_next'),
        asNavFor: '.sinlge-product-big__slider',
        focusOnSelect: true,
     });


  }
  
  $('.catagory-mobile__category').on('click', function() {
    $('html').addClass('html-overflow');
    $('.category-modal').addClass('category-modal-active');
    return false;
  })

  $('.category-modal-close').on('click', function() {
    $('html').removeClass('html-overflow');
    $('.category-modal').removeClass('category-modal-active');
    return false;
  })

  $('.mobile-nav__burger').on('click', function() {
    $('html').toggleClass('html-overflow');
    $('.nav').toggleClass('nav-fixed');
    return false;
  })

  $(".scroll-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.modal-open').on('click', function() {
    $('.modal-window-form').addClass('modal-window-active');
    $('.dark-window').addClass('modal-window-active');
    return false;
  })

  $('.dark-window').on('click', function() {
    $('.modal-window').removeClass('modal-window-active');
    $('.dark-window').removeClass('modal-window-active');
  })

  $('.modal-window__close').on('click', function() {
    $('.modal-window').removeClass('modal-window-active');
    $('.dark-window').removeClass('modal-window-active');
  })

  $('.nav-btn').on('click', function() {
    $('.modal-window__title_change').text('заказа звонка');
    $('.modal-window__btn').text('заказать звонок');
  })
  $('.sinlge-product-btn').on('click', function() {
    $('.modal-window__title_change').text('оформления заказа');
    $('.modal-window__btn').text('оформить заказ');
  })

  $('.reviews-slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      speed: 700,
      fade: true,
      cssEase: 'linear',
      prevArrow: $('.reviews-slider-arrow__prev'),
      nextArrow: $('.reviews-slider-arrow__next'),
   });

  
  

  $('.projects-block-slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      arrows: false,
   });

  $('.projects-about-slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      arrows: true,
      speed: 700,
      fade: true,
      prevArrow: $('.projects-slider-arrow__prev'),
      nextArrow: $('.projects-slider-arrow__next'),
   });

  $('.projects-block-navslide').on('click', function() {
    let parent = $(this).closest('.projects-block');
    let slider_parent = $(parent).children('.projects-block-slider');
    let all_slides = $(parent).children('.projects-block-navslider');
    all_slides = $(all_slides).children('.projects-block-navslide');
    let index_slide = $(all_slides).index(this);
    $(slider_parent).slick('slickGoTo', index_slide);
  })

  $('.catalog-catagory__item__arrow').on('click', function() {
    let parent = $(this).closest('.catalog-catagory__item');
    $(parent).toggleClass('catalog-catagory__item_active');
  })
 
  let reviews_count = $('.reviews-slider .slick-slide').length;
  $('.reviews-slider__counter .counter_all').text(reviews_count);

  let certificates_count = $('.certificates-row .certificates-block').length;
  $('.certificates-slider__counter .counter_all').text(certificates_count);

  let projects_count = $('.projects-about-slider .projects-block').length;
  $('.projects-counter-slider .counter_all').text(projects_count);


  $('.reviews-slider').on('afterChange', function(event, slick, currentSlide) {
  	let counter_slide = currentSlide + 1;
  	if (counter_slide < 10) {
  		$('.reviews-slider__counter .counter_now').text('0' + counter_slide);
  	}
  	else{
  		$('.reviews-slider__counter .counter_now').text(counter_slide);
  	}
   });

  $('.projects-about-slider').on('afterChange', function(event, slick, currentSlide) {
    let counter_slide = currentSlide + 1;
    if (counter_slide < 10) {
      $('.projects-counter-slider .counter_now').text('0' + counter_slide);
    }
    else{
      $('.projects-counter-slider .counter_now').text(counter_slide);
    }
   });

  $('.certificates-row').on('afterChange', function(event, slick, currentSlide) {
    let counter_slide = currentSlide + 1;
    if (counter_slide < 10) {
      $('.certificates-slider__counter .counter_now').text('0' + counter_slide);
    }
    else{
      $('.certificates-slider__counter .counter_now').text(counter_slide);
    }
   });

  $('.questions-block').on('click', function() {
  	$(this).toggleClass('questions-active');
  })

  $(".phone").mask("+7 (999) 999-9999");

  
})