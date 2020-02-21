window.$(document).ready(function() {
  window.$("div.p1").on("mouseover", function() {
    window
      .$("div.p1")
      .css(
        "background-image",
        "{% static 'basic_app/images/projects/Project-1-Dark.png' %}"
      );
    window.$("h1.project-image-contents-1").css("opacity", "1");
    window.$("input.project-image-contents-1").css("opacity", "1");
  });
  $("div.p1").on("mouseout", function() {
    $("div.p1").css("background-image", "url(/project-1.jpg)");
    $("h1.project-image-contents-1").css("opacity", "0");
    $("input.project-image-contents-1").css("opacity", "0");
  });
  $("div.p2").on("mouseover", function() {
    $("div.p2").css("background-image", "url(/project-2-dark.png)");
    $("h1.project-image-contents-2").css("opacity", "1");
    $("input.project-image-contents-2").css("opacity", "1");
  });
  $("div.p2").on("mouseout", function() {
    $("div.p2").css("background-image", "url(/project-2.jpg)");
    $("h1.project-image-contents-2").css("opacity", "0");
    $("input.project-image-contents-2").css("opacity", "0");
  });
  $("div.p3").on("mouseover", function() {
    $("div.p3").css("background-image", "url(/project-3-dark.png)");
    $("h1.project-image-contents-3").css("opacity", "1");
    $("input.project-image-contents-3").css("opacity", "1");
  });
  $("div.p3").on("mouseout", function() {
    $("div.p3").css("background-image", "url(/project-3.jpg)");
    $("h1.project-image-contents-3").css("opacity", "0");
    $("input.project-image-contents-3").css("opacity", "0");
  });
  $("div.p4").on("mouseover", function() {
    $("div.p4").css("background-image", "url(/project-4-dark.png)");
    $("h1.project-image-contents-4").css("opacity", "1");
    $("input.project-image-contents-4").css("opacity", "1");
  });
  $("div.p4").on("mouseout", function() {
    $("div.p4").css("background-image", "url(/project-4.jpg)");
    $("h1.project-image-contents-4").css("opacity", "0");
    $("input.project-image-contents-4").css("opacity", "0");
  });
});
