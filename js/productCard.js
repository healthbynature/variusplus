$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});
$('.consist__plus').click(function() {
  if ($('.consist__plus').hasClass('shown')) {
    $('.consist__plus').removeClass('shown');
    $('.consist__hidden').fadeOut();
  } else {
    $('.consist__plus').addClass('shown');
    $('.consist__hidden').fadeIn();
  }
});
$('.cert__img').click(function() {
  $('.cert__popup').fadeIn();
});
$('.cert__cross').click(function() {
  $('.cert__popup').fadeOut();
});
$(document).on('click', $('.cert__popup'), function(e) {
  if (e.target != $('.cert__popup--img')[0] && e.target != $('.cert__popup--img img')[0] && e.target != $('.cert__img')[0]) {
    $('.cert__popup').fadeOut();
  }
});

$('.country-select').on('change', '', function (e) {
  setRegions();
  window.sessionStorage.setItem('orderSelectedCountry', $('.country-select').val());
});

$('.state-select').on('change', '', function (e) {
  window.sessionStorage.setItem('orderSelectedState', $('.state-select').val());
});

$(document).ready(function(e) {
  const previousSelectedCountry = window.sessionStorage.getItem('orderSelectedCountry');
  if(previousSelectedCountry) {
    $('.country-select').val(previousSelectedCountry);
  }
  if($('.country-select[name="country"]').val()) {
    setRegions();
    const previousSelectedState = window.sessionStorage.getItem('orderSelectedState');
    if(previousSelectedState) {
      $('.state-select').val(previousSelectedState);
    }
  }
});

function setRegions() {
  var regions = $(".country-select option:selected").data('regions').split(',');
  var regionsSelect = $('.state-select');
  regionsSelect.empty();
  regions.forEach(function (reg) {
    regionsSelect.append($("<option></option>").attr("value", reg).text(reg));
  });
}

setRegions();