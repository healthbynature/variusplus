$(function (params) {
  const doNotShow = localStorage && localStorage.isCookiePopupClosed
  if (doNotShow) {
    return
  }
  var popup = $('.cookie-popup');
  if (popup) {
    popup.find('.close-cookie-popup, .dismiss-popup').click(function () {
      if (localStorage) {
        localStorage.isCookiePopupClosed = true
      }
      popup.hide()
    })
    popup.show()
  }
})
