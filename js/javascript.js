
$(document).ready(function() {
     $width = widthDeterminer();
     doSomething($width);
     $(window).resize(function() {
          var $newWidth = widthDeterminer();
          if ($newWidth != $width)
          {
               doSomething($newWidth);
               $width = $newWidth;
          }
          else
               return;
     });
});

function navbarResizer() {
     // if (widthDeterminer() == "xs")
     // {
     //      $("#jumbo").css('margin-top', '56px');
     //      $("#jumbo").css('padding-top', "1em");
     // }
     // else {
          $("#jumbo").css('margin-top', "46px");
          $("#jumbo").css('padding-top', "2em");
     // }
};

function doSomething($size) {
     if ($size == "xs")
          xsSettings();
     else
          smUpSettings();
};

function xsSettings() {
     $("#collapsing-content").collapse("hide");

     makeFontSmall();

     $("#img-box").hide();
     $("#navigation-column").prependTo("#fixed-navbar-shit");

     $("#navigation-column").css("position", "fixed");
     $("#navigation-column").css("z-index", "2147483647");

     $(".nav").removeClass("nav-inline");
     $("#navigation-column").css("background-color", "#F7F7F9");
     $("#navigation-column text-link:hover").css("color", "#474747");
     $("#navigation-column").css("color", "#474747");

     navbarResizer();
};

function smUpSettings() {
     $(".nav").addClass("nav-inline");
     $("#collapsing-content:hidden").collapse("show");

     $("#navigation-column").css("z-index", "2147483647");
     if ($width == "md")
          makeFontLarge();
     else
          makeFontSmall();

     $("#navigation-column").prependTo("#fixed-navbar-shit");
     $("#navigation-column").css("background-color", "#000");
     $("#navigation-column").css("color", "#FFF");

     $("#navigation-column").addClass("card-grad");
     $("#navigation-column").css("position", "fixed");
     $("#jumbo").css("margin-top", $("#navigation-box").css("height"));

     navbarResizer();
};

function widthDeterminer() {
     var $curWidth = $(document).width();
     if ($curWidth <= 543)
          return "xs";
     if ($curWidth < 768)
          return "sm";
     else
          return "md";
};

function makeFontLarge() {
     /* i haven't quite decided yet to do with these */
};

function makeFontSmall() {
};
