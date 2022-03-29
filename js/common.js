$(document).ready(function () {
  $(".scroll-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

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