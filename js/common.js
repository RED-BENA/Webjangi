$(document).ready(function() {
  $(window).scroll(function() {
    $('.js-index__content').css('transform', 'translateY(100vh)');
  });

  $('.js-index__header__menu-button').click(function() {
    $('.js-main-menu').show('slide', {direction: 'right'}, 300);
    $('.dim-bg').addClass('open');
  });

  $('.js-main-menu__close').click(function(e) {
    e.stopPropagation();
    $('.js-main-menu').hide('slide', {direction: 'right'}, 300);
    $('.dim-bg').removeClass('open');
  })

  $('.js-main-menu__list__drop').click(function() {
    $(this).parent().toggleClass('open');
    $(this).toggleClass('open');

    if ($(this).parent().attr('class').includes('premium')) {
      $('.js-premium').slideToggle(200);
    } else if ($(this).parent().attr('class').includes('customer-support')) {
      $('.js-customer-support').slideToggle(200);
    }
  });
});
