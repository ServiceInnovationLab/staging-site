/* eslint-env jquery */
$(function() {
  // Onclick window location handler
  $('.card-link').on('click', function(e) {
    var url = $(this).data().href;
    if (e.shiftKey || e.ctrlKey || e.metaKey) {
      window.open(url, '_blank');
    } else {
      window.location = url;
    }
  });

  // Drawer
  $('.menu-btn, .overlay, .sliding-panel-close').on(
    'click touchstart',
    function(e) {
      $('.nav-mobile, .overlay').toggleClass('is-visible');
      e.preventDefault();
    },
  );

  // Styleguide drawer
  $('.menu-btn-styleguide, .sliding-panel-close-styleguide').on(
    'click touchstart',
    function(e) {
      $('.nav-mobile-styleguide').toggleClass('is-visible');
      e.preventDefault();
    },
  );

  function callbackFunction(resp) {
    if (resp.result === 'success') {
      newsletterForm.response();
    }
  }

  $('.search-interface').on('submit', function() {
    $('#search-loading').show();
  });
});
