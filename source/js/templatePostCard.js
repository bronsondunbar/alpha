
/* Template Post Cards */

$(document).ready(function () {

  /* Fix single item in carousel */

  $("#carousel-desktop > .carousel-inner > .item").each(function() {

      var numberOfItems = $(".grid > .items", $(this)).length;
      var containerWidth = $("section[role='highlight'] > .container > #carousel-desktop > .carousel-inner").css("width");

      if (numberOfItems == 1) {
        var courseId = $(this).children(".grid").children(".items").attr("id");
        var courseLink = $(this).children(".grid").children(".items").children("a").attr("href");
        var courseImage = $(this).children(".grid").children(".items").children("a").children("img").attr("src");
        var courseCaption = $(this).children(".grid").children(".items").children(".course-caption").html();

        $(this).children(".grid").children(".items").attr("id", courseId);
        $(this).children(".grid").children(".items").addClass("single");
        $(this).children(".grid").children(".items").html("<div class='course-card'><a href='" + courseLink +  "'><div class='course-card-image' style='background-image: url(" + courseImage + ")'></div></a><div class='course-card-caption'>" + courseCaption + "</div></div>");
        $(this).children(".grid").children(".items").children(".course-card").children("a").children(".course-card-image").css("width", containerWidth);
        $(this).children(".grid").children(".items").children(".course-card").children("a").children(".course-card-image").css("height", "19.3vh");
      }

    }

  );

  /* Fix last item height & width for explore courses */

  $("section[role='courses'] > .container > .grid > .items").each(function () {

    var containerWidth = parseInt($("section[role='courses'] > .container").css("width")) - 30;
    var courseCardWidth = parseInt($(this).css("width"));

    if (courseCardWidth == containerWidth) {
      var courseKey = $(this).children("a").attr("data-course-key");
      var courseLink = $(this).children("a").attr("href");
      var courseImage = $(this).children("a").children("img").attr("src");
      var courseCaption = $(this).children(".course-caption").html();
      var courseFooter = $(this).children(".wrapper-messages-primary").html();

      $(this).html("<div class='course-card'><a href='" + courseLink +  "' data-course-key='" + courseKey + "'><div class='course-card-image' style='background-image: url(" + courseImage + ")'></div></a><div class='course-card-caption'>" + courseCaption + "</div><footer class='wrapper-messages-primary'>" + courseFooter + "</footer></div>");
      $(this).children(".course-card").children("a").children(".course-card-image").css("width", containerWidth + "px");
    }

    if ($(".messages-list").children("li").length == 0) {
      $(".messages-list").css("display", "none");
    }
    
  });

});