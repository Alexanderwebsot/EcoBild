$(document).ready(function () {
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
  $('.sinlge-product-big__slider').slick({
      asNavFor: '.sinlge-product-navbar-slider',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      arrows: false,
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
 
  let reviews_count = $('.reviews-slide').length;
  $('.counter_all').text(reviews_count);

  $('.reviews-slider').on('afterChange', function(event, slick, currentSlide) {
  	let counter_slide = currentSlide + 1;
  	if (counter_slide < 10) {
  		$('.counter_now').text('0' + counter_slide);
  	}
  	else{
  		$('.counter_now').text(counter_slide);
  	}
   });

  $('.questions-block').on('click', function() {
  	$(this).toggleClass('questions-active');
  })

  $(".phone").mask("+7 (999) 999-9999");
})