
// @codekit-prepend 'lib/jquery.1.12.4.js'
// @codekit-prepend 'lib/jquery.mobile.1.4.5.js'
// @codekit-prepend 'lib/bootstrap.js'
// @codekit-prepend 'lib/jquery.color.js'
// @codekit-prepend 'lib/jquery.waypoints.js'

$(document).ready(function () {

  $("body").waypoint(function() {

      $(".navbar-default").animate({
          backgroundColor : "transparent"
      }, 100);

  }, {
      offset: "-1"
  });


  $(".waypoint").waypoint(function() {
 
      $(".navbar-default").animate({
          backgroundColor : "rgba(13, 55, 86, 1)"
      }, 100);


  }, {
      offset: "1"
  });

});

$(".search > input").focus(function () {

  var screenResolution = $(document).width();

  switch (screenResolution) {

    case 1920:

      $(".search").animate({
        width: "20%"
      }, 500);
      break;

    case 1440:

      $(".search").animate({
        width: "20%"
      }, 500);
      break;

    case 1024:

      $(".search").animate({
        width: "30%"
      }, 500);
      break;

  }

});

$(".search > input").blur(function () {

  var screenResolution = $(document).width();

  switch (screenResolution) {

    case 1920:

      $(".search").animate({
        width: "10%"
      }, 500);
      break;

    case 1440:

      $(".search").animate({
        width: "15%"
      }, 500);
      break;

    case 1024:

      $(".search").animate({
        width: "20%"
      }, 500);
      break;

  }
  
});


$("a[href='/signin']").click(function (event) {
  event.preventDefault();
  $(".welcome").fadeOut(500, false);
  $(".register-one").fadeOut(500, false);
  $(".register-two").fadeOut(500, false);
  $(".signin").fadeIn(500, false);
});

$("a[href='/register']").click(function (event) {
  event.preventDefault();
  $(".welcome").fadeOut(500, false);
  $(".signin").fadeOut(500, false);
  $(".register-one").fadeIn(500, false);
});

$("a[href='/continue']").click(function (event) {
  event.preventDefault();
  $(".register-one").fadeOut(500, false);
  $(".register-two").fadeIn(500, false);
});

$("a[href='/back']").click(function (event) {
  event.preventDefault();
  $(".register-one").fadeIn(500, false);
  $(".register-two").fadeOut(500, false);
});

$(document).ready(function () {

  $("#carousel-mobile").swiperight(function() {
    $(this).carousel("prev");
    $(".fa-hand-o-up").css("display", "none");
  });

  $("#carousel-mobile").swipeleft(function() {
    $(this).carousel("next");
    $(".fa-hand-o-up").css("display", "none");
  });

});














