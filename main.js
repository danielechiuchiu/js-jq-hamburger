$('.header-right a:last-child').click(
  function() {
    $('.hamburger-menu').addClass('active');
  }
);


$('a.close').click(
  function() {
    $('.hamburger-menu').removeClass('active');
  }
);
