function map() {
  $('.contact-iframe').append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.890459386702!2d26.07342171552267!3d44.4148934791025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff9dfc109b23%3A0xed397661e862d75f!2sElectromagnetica%20Business%20Park!5e0!3m2!1sru!2sua!4v1575457631478!5m2!1sru!2sua" width="100%" height="550" frameborder="0" style="border: 0;" allowfullscreen=""></iframe>');
};

if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(map, 1000)
    }, {
      once: true,
      passive: true
    });
} else {
  map();
};

$('#form').trigger('reset');

let input = $('#form input'),
  successPopup = $('#form .success-popup');

function hideInvalidMessage() {
  input.removeClass('invalid-field');
  $('#form .error-message').fadeOut();
}

input.click(function () {
  $(this).removeClass('invalid-field');
  $(this).next().fadeOut();
  $('#form .invalid-field').on('click', function () {
    $(this).removeClass('invalid-field');
    $(this).next().fadeOut();
  });
})

$(function () {
  'use strict';
  $('#form').on('submit', function (e) {
    e.preventDefault();
    var data = $(this).serializeArray().reduce((o, f) => (o[f.name] = f.value, o), {});
    $.ajax({
      url: '/email',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function (msg) {
        hideInvalidMessage();
        successPopup.fadeIn();
        $('#form .success-popup-message').html(msg.message);
        setTimeout(function () {
          successPopup.fadeOut();
        }, 4000);
        $('#form').trigger('reset');
      },
      error: function (res) {
        if (res.responseJSON == undefined) {
          hideInvalidMessage();
          successPopup.fadeIn();
          $('#form .success-popup-message').html('Server error, please try later');
          setTimeout(function () {
            successPopup.fadeOut();
          }, 4000);
        } else if (res.responseJSON.error) {
          hideInvalidMessage();
          successPopup.fadeIn();
          $('#form .success-popup-message').html(message.error);
          setTimeout(function () {
            successPopup.fadeOut();
          }, 4000);
        }
        for (let i = 0; i < input.length; i++) {
          let name = input[i].getAttribute('name');
          if (typeof message.errors[name] !== "undefined") {
            input[i].classList.add('invalid-field');
            input[i].nextElementSibling.textContent = message.errors[name][0];
            input[i].nextElementSibling.style.display = 'block';
          }
        }
      }
    });
  });
});

$('#form .success-popup-bg').click(function () {
  successPopup.fadeOut();
});
$('#form .success-popup-close').click(function () {
  successPopup.fadeOut();
});