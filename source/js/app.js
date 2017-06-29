
// @codekit-prepend 'lib/jquery.1.12.4.js'
// @codekit-prepend 'lib/jquery.mobile.1.4.5.js'
// @codekit-prepend 'lib/bootstrap.js'
// @codekit-prepend 'lib/jquery.color.js'
// @codekit-prepend 'lib/jquery.waypoints.js'
// @codekit-prepend 'lib/velocity.js'

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

$(".navbar-header > .search > input").focus(function () {

  var screenResolution = $(document).width();

  switch (screenResolution) {

    case 1920:

      $(".search").velocity({
        width: "20%"
      }, 500);
      break;

    case 1440:

      $(".search").velocity({
        width: "20%"
      }, 500);
      break;

    case 1024:

      $(".search").velocity({
        width: "30%"
      }, 500);
      break;

  }

});

$(".navbar-header > .search > input").blur(function () {

  var screenResolution = $(document).width();

  switch (screenResolution) {

    case 1920:

      $(".search").velocity({
        width: "10%"
      }, 500);
      break;

    case 1440:

      $(".search").velocity({
        width: "15%"
      }, 500);
      break;

    case 1024:

      $(".search").velocity({
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
        $(".navbar-content").velocity({
          width : "0"
        }, 200);
      });

    } else if (navbarContent === "0px") {

      $(".navbar-content").velocity({
        "width" : "350px"
      }, 200, function () {
        $(".navbar-content > div").delay(500).fadeIn(300);
      });

    };
    
  });

  $(".navbar-content-close-btn").click(function (event) {

    $(".navbar-content > div").fadeOut(300, function () {
      $(".navbar-content").velocity({
        "width" : "0px"
      }, 200);
    });

  });
});

navbarLevel = 0;

$(".navbar-content-item").click(function (event) {
  event.preventDefault();

  var linkRef = $(this).attr("href");
  var linkRef = linkRef.replace('/','');

  if (linkRef != "#") {

    $(this).parents("ul").children("li").hide();
    $(this).parents("li").next(".submenu").velocity({
      left: 0
    }, 200, 'linear');

    navbarLevel ++;

    var currentNavbarItem = $(this).text();
    $(".breadcrumbs").html("<li>" + currentNavbarItem + "</li>");

    var linkRef = linkRef.replace('-',' ');
    $(".navbar-title").html(linkRef);

  }
});

$(".navbar-content-sub-item").click(function (event) {
  event.preventDefault();

  var linkRef = $(this).attr("href");
  var linkRef = linkRef.replace('/','');

  if (linkRef != "#") {

    $(this).parents("ul").children("li").hide();

    $(this).parents("li").next(".submenu").velocity({
      left: 0
    }, 200, 'linear');

    var currentNavbarItem = $(this).text();
    $(".breadcrumbs").html($(".breadcrumbs").html() + "<li>" + currentNavbarItem + "</li>");

    var linkRef = linkRef.replace('-',' ');
    $(".navbar-title").html(linkRef);

  }
});

$(".go-back").click(function (event) {
  event.preventDefault();

  var linkRef = $(this).attr("href");
  var linkRef = linkRef.replace('/','');

  if (navbarLevel == 1) {

    $(this).closest("ul").velocity({
      left: 400
    }, 100, 'linear');
    $(this).parents("ul").parents("ul").children("li").fadeIn();

    navbarLevel --;

    $(".breadcrumbs li:last-child").remove();

    $(".navbar-title").html(linkRef);

  } else {

    $(this).parents("ul").parents("ul").children("li").fadeIn();
    $(this).parents("ul").parents("ul").parents("ul").children("li").hide();

    $(this).closest("ul").velocity({
      left: 400
    }, 100, 'linear');
    $(this).parents("ul").parents("ul").children("li").fadeIn();

    navbarLevel --;

    $(".breadcrumbs li:last-child").remove();

    var linkRef = linkRef.replace('-',' ');
    $(".navbar-title").html(linkRef);

  }
});














