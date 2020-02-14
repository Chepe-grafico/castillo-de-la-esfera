// Smooth scrolling via animate()
$(document).ready(function () {

  let catalogoso = document.querySelector('#portfolio');

  let observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      console.log('dogo');
      $('.carrot').addClass('animated');
      $('.carrot').addClass('bounce');
    } else {
      console.log('no-dogo');
      $('.carrot').removeClass('animated');
      $('.carrot').removeClass('bounce');
    }
  });

  observer.observe(catalogoso);

  var mymap = L.map('mapid').setView([19.8534946, -98.0197029], 17);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieW9zZXB0IiwiYSI6ImNqd3JuOHI1ODA2c3E0OHBkaGlmcHRidncifQ.hFNCKmeZ3DAXHvK5TKBXLg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
  }).addTo(mymap);

  var marker = L.marker([19.8534946, -98.0197029]).addTo(mymap);

  if ($('.g-recaptcha')) {
    checkReCaptcha()
  }

  $("a").on('click', function (event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });

  // Navigation change on scroll
  var maxOffset = 300;
  $(window).scroll(function () {
    if ($(window).scrollTop() >= maxOffset) {
      $('.navbar-default').addClass('navbar-shrink');
    } else {
      $('.navbar-default').removeClass('navbar-shrink');
    }
  });

  var maxOffset = 300;
  if ($(window).scrollTop() >= maxOffset) {
    $('.navbar-default').addClass('navbar-shrink');
  } else {
    $('.navbar-default').removeClass('navbar-shrink');
  }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
  $('.navbar-toggle:visible').click();
});

// Async contact form
$('form[id=contactForm]').submit(function () {
  $.post($(this).attr('action'), $(this).serialize(), function (data, textStatus, jqXHR) {
    $('form[id=contactForm] #success').hide();
    $('form[id=contactForm] #error').hide();
    if (jqXHR.status == 200) {
      $('form[id=contactForm] #success').show();
    }
  }, 'json').fail(function () {
    $('form[id=contactForm] #success').hide();
    $('form[id=contactForm] #error').hide();
    $('form[id=contactForm] #error').show();
  });
  return false;
});

// Contact form validation
$.validate({
  modules: 'html5, toggleDisabled'
});

function onContactCaptcha($form) {
  $('form#contactForm').submit();
}

function checkReCaptcha() {
  if (typeof grecaptcha === "undefined") {
    $('.captcha-error').show();
    setTimeout(checkReCaptcha, 200);
  } else {
    $('.captcha-error').hide();
    $('.g-recaptcha-filler').hide();
    $('.g-recaptcha').attr('disabled', true);
  }
}