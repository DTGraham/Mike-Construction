$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".about-img");
  var tags2 = $(".project-gallery-image");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }

  for (var t = 0; t < tags2.length; t++) {
    var tag2 = tags2[i];

    if ($(tag2).position().top < pageBottom) {
      $(tag2).addClass("visible");
    } else {
      $(tag2).removeClass("visible");
    }
  }
});
