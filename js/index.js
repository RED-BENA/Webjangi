$(document).ready(function() {
  let min_designer = 0;
  let max_designer = 359;

  let min_publicer = 0;
  let max_publicer = 183;

  let min_premium = 0;
  let max_premium = 19;

  $(window).scroll(function(e) {
    e.preventDefault();

    let height = $(window).scrollTop();

    if (height < screen.height) {

    } else if (height < screen.height * 2) {

    } else if (height < screen.height * 3) {

    }
  })

  let increaseDesigner = setInterval(function() {
    $('.js-index__section__quantity.designer').html(min_designer);

    min_designer++;

    if (min_designer == max_designer) {
      clearInterval(increaseDesigner);
    }
  }, 10);

  let increasePublicer = setInterval(function() {
    $('.js-index__section__quantity.publicer').html(min_publicer);

    min_publicer++;

    if (min_publicer == max_publicer) {
      clearInterval(increasePublicer);
    }
  }, 10);

  let increasePremium = setInterval(function() {
    $('.js-index__section__quantity.premium').html(min_premium);

    min_premium++;

    if (min_premium == max_premium) {
      clearInterval(increasePremium);
    }
  }, 10);

  // section1

  $('.js-index__section:first-child').on("swipeup", function(e) {
    e.preventDefault();

    $('.js-index__content').css('transform', 'translateY(-100%)');
    $('.js-index__background').removeClass('active');
    $('.background2').addClass('active');

    $('.js-index__section').removeClass('active');
    $('.js-index__section:nth-child(2)').addClass('active');
  });

  $('.js-index__section:first-child').on("swipedown", function(e) {
    e.preventDefault();

    $('.js-index__content').css('transform', 'translateY(-200%)');
    $('.js-index__background').removeClass('active');
    $('.background3').addClass('active');

    $('.js-index__section').removeClass('active');
    $('.js-index__section:nth-child(3)').addClass('active');
  });

  // section2

  $('.js-index__section:nth-child(2)').on("swipeup", function(e) {
    e.preventDefault();

    $('.js-index__content').css('transform', 'translateY(-200%)');
    $('.js-index__background').removeClass('active');
    $('.background3').addClass('active');

    $('.js-index__section').removeClass('active');
    $('.js-index__section:nth-child(3)').addClass('active');
  });

  $('.js-index__section:nth-child(2)').on("swipedown", function(e) {
    e.preventDefault();

    $('.js-index__content').css('transform', 'translateY(0%)');
    $('.js-index__background').removeClass('active');
    $('.background1').addClass('active');

    $('.js-index__section').removeClass('active');
    $('.js-index__section:first-child').addClass('active');
  });

  // section3

  $('.js-index__section:nth-child(3)').on("swipeup", function(e) {
    e.preventDefault();

    $('.js-index__content').css('transform', 'translateY(0%)');
    $('.js-index__background').removeClass('active');
    $('.background1').addClass('active');

    $('.js-index__section').removeClass('active');
    $('.js-index__section:first-child').addClass('active');
  });

  $('.js-index__section:nth-child(3)').on("swipedown", function(e) {
    e.preventDefault();

    $('.js-index__content').css('transform', 'translateY(-100%)');
    $('.js-index__background').removeClass('active');
    $('.background2').addClass('active');

    $('.js-index__section').removeClass('active');
    $('.js-index__section:nth-child(2)').addClass('active');
  });
});
