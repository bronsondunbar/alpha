
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

$(document).ready(function () {

  $("a").attr("data-ajax", "false");

  $("#carousel-mobile").swiperight(function() {
    $(this).carousel("prev");
    $(".fa-hand-o-up").css("display", "none");
  });

  $("#carousel-mobile").swipeleft(function() {
    $(this).carousel("next");
    $(".fa-hand-o-up").css("display", "none");
  });

});

$(document).ready(function () {

  $(".navbar-toggle").click(function (event) {
    var navbarContent = $(".navbar-content").css("width");

    if (navbarContent === "350px") {

      $(".navbar-content > div").fadeOut(300, function () {
        $(".navbar-content").animate({
          width : "0"
        }, 300);
      });

    } else if (navbarContent === "0px") {

      $(".navbar-content").animate({
        "width" : "350px"
      }, 300, function () {
        $(".navbar-content > div").delay(500).fadeIn(300);
      });

    };
    
  });

  $(".navbar-content-close-btn").click(function (event) {

    $(".navbar-content > div").fadeOut(300, function () {
      $(".navbar-content").animate({
        width : "0"
      }, 300);
    });

  });

  $(".panel-heading").click(function (event) {
    $(".panel-heading").removeClass("open");
    $(this).addClass("open");
  });
});














