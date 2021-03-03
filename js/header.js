$('.nav__toggle').click(function () {
  $('.header__nav').toggleClass('show');
});

$('.select-language').selectric({disableOnMobile: false, nativeOnMobile: false});

$(document).ready(function () {
  for (i=0;i<$('.selectric-items li').length;i++) {
    $('.selectric-items li')[i].classList.add($('.selectric-items li')[i].textContent);
  }
});