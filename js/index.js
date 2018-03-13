$(document).ready(function() {
  // 페이지가 로딩된 후 올라가는 숫자
  let init_val = 0;

  // designer quantity
  let max_designer = 359;

  // publicer quantity
  let max_publicer = 183;

  // premium quantity
  let max_premium = 19;

  // 페이지가 로딩된 후 init_val을 올려주는 메서드
  $.increase = function(className, min, max) {
    let increaseNum = setInterval(function() {
      // min_designer의 값을 보여준다
      $('.js-index__section__quantity.' + className).html(min);

      // 1씩 증가 (화면 상에서는 숫자가 차례대로 증가하는 것처럼 보임)
      min++;

      // max_designer 값과 동일할 때
      if (min == max) {
        // setInterval을 중단한다
        clearInterval(increaseNum);
      }
    }, 10);

    // 다른 곳을 터치했을 때
    $('html').on("tap", function(e) {
      // setInterval을 중단한다
      clearInterval(increaseNum);

      // 화면에 바로 max 값을 보여준다
      $('.js-index__section__quantity.designer').html(max_designer);
      $('.js-index__section__quantity.publicer').html(max_publicer);
      $('.js-index__section__quantity.premium').html(max_premium);
    });
  }

  // 섹션 (Designer, Publicer, Premium) 이동 메서드
  $.goToSection = function(section_num) {
    $('.js-index__background').removeClass('active');
    $('.background'+section_num).addClass('active');

    $('.js-index__section').removeClass('active');
    $('.js-index__section:nth-child('+section_num+')').addClass('active');

    $('.js-index__indicator__item').removeClass('active');
    $('.js-index__indicator__item:nth-child('+section_num+')').addClass('active');

    switch (section_num) {
      case 1:
        $('.js-index__content').css('transform', 'translateY(0%)');
        break;
      case 2:
        $('.js-index__content').css('transform', 'translateY(-100%)');
        break;
      case 3:
        $('.js-index__content').css('transform', 'translateY(-200%)');
        break;
    }
  }

  // swipeup & mousewheeldown 이벤트 메서드
  $.scrollSection_swipeup = function(section_num) {
    switch (section_num) {
      case 1:
        $.goToSection(2);
        break;
      case 2:
        $.goToSection(3);
        break;
      case 3:
        $.goToSection(1);
        break;
    }
  }

  // swipedown & mousewheelup 이벤트 메서드
  $.scrollSection_swipedown = function(section_num) {
    switch (section_num) {
      case 1:
        $.goToSection(3);
        break;
      case 2:
        $.goToSection(1);
        break;
      case 3:
        $.goToSection(2);
        break;
    }
  }

  $.increase('designer', init_val, max_designer);
  $.increase('publicer', init_val, max_publicer);
  $.increase('premium', init_val, max_premium);

  $('.js-index__section__floating').addClass('open');
  $('.js-index__section__red-line').addClass('open');

  // section1 mousewheel up/down
  $('.js-index__section:first-child').mousewheel(function(e) {
    if (e.deltaY == 1) { // mousewheel up
      $.scrollSection_swipedown(1);
    } else { // mousewheel down
      $.scrollSection_swipeup(1);
    }
  });

  // section1 swipe up/down
  $('.js-index__section:first-child').on("swipeup", function(e) {
    $.scrollSection_swipeup(1);
  });

  $('.js-index__section:first-child').on("swipedown", function(e) {
    $.scrollSection_swipedown(1);
  });

  // section2 mousewheel up/down
  $('.js-index__section:nth-child(2)').mousewheel(function(e) {
    if (e.deltaY == 1) { // mousewheel up
      $.scrollSection_swipedown(2);
    } else { // mousewheel down
      $.scrollSection_swipeup(2);
    }
  });

  // section2 swipe up/down
  $('.js-index__section:nth-child(2)').on("swipeup", function(e) {
    $.scrollSection_swipeup(2);
  });

  $('.js-index__section:nth-child(2)').on("swipedown", function(e) {
    $.scrollSection_swipedown(2);
  });

  // section3 mousewheel up/down
  $('.js-index__section:nth-child(3)').mousewheel(function(e) {
    if (e.deltaY == 1) { // mousewheel up
      $.scrollSection_swipedown(3);
    } else { // mousewheel down
      $.scrollSection_swipeup(3);
    }
  });

  // section3 swipe up/down
  $('.js-index__section:nth-child(3)').on("swipeup", function(e) {
    $.scrollSection_swipeup(3);
  });

  $('.js-index__section:nth-child(3)').on("swipedown", function(e) {
    $.scrollSection_swipedown(3);
  });

  $('.js-web-source__button--more').click(function(e) {
    $('.js-web-source__floating').toggleClass('active');
  });
});
