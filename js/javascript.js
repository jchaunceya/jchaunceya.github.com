$(document).ready(function() {

     checkSize();
     $(window).resize(checkSize);
});



function checkSize() {

     if ($(document).width() <= 543) // hide collapse show button
     {
          if ($("#name-title-target").attr("font-size") == "3.5rem")
          {
               $(".large-lg").removeClass("large-lg-css");
               $(".small-lg").removeClass("small-lg-css");
          }
          $("#navigation-column").css("height", "100%");
          $("#img-box").hide();
          $("#navigation-column").prependTo("#info-segment");
     }
     else
     {
          if ($(document).width() >= 768)
          {
               $("#img-box").show();

               $(".large-lg").addClass("large-lg-css");
               $(".small-lg").addClass("small-lg-css");

          }
          else {

               $("#img-box").hide();


          }
          var $heightOfInfo = $("#info-segment").height();
          $("#navigation-column").css("height", $heightOfInfo);
          $("#collapsing-content").collapse("show");
          $("#navigation-column").appendTo("#info-segment");
     }
}
