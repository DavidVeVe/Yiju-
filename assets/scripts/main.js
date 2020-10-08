/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function ($) {
  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    common: {
      init: function () {
        var topOffset = 60;
        $('a[href*="#"]').click(function () {
          if (
            location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
          ) {
            var target = $(this.hash);
            target = target.length
              ? target
              : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
              $("html, body").animate(
                {
                  scrollTop: target.offset().top - topOffset,
                },
                1000
              );
              return false;
            }
          }
        });

        var body = document.querySelector("body");

        var footer = document.querySelector(".footer__container");
        var footerTexture = document.querySelector(".footer__texture2");
        var footerTexture3 = document.querySelector(".footer__texture3");
        if (body.classList.contains("unete")) {
          footer.style.backgroundColor = "#fffcf1";
          footerTexture3.style.display = "initial";
        }
        if (body.classList.contains("nosotros")) {
          footer.style.backgroundColor = "#fffcf1";
          footerTexture.style.display = "initial";
        }
        if (body.classList.contains("encuentranos")) {
          footer.style.backgroundColor = "#fffcf1";
        }
        if (body.classList.contains("productos")) {
          footer.style.backgroundColor = "#fffcf1";
        }

        $(".owl-one").owlCarousel({
          items: 1,
          margin: 23,
          loop: true,
          autoWidth: true,
          nav: false,
          dots: false,
        });

        $(".owl-two").owlCarousel({
          items: 1,
          margin: 36,
          loop: true,
          autoWidth: true,
          nav: false,
          dots: true,
        });

        // tns({
        //   container: ".owl-three",
        //   mode: "gallery",
        //   autoplay: false,
        //   items: 1,
        //   speed: 500,
        //   navContainer: ".owl-three-nav",
        //   controls: false,
        //   nested: "outer",
        //   loop: false,
        // });

        // tns({
        //   container: "#owl-three-inner-paletas",
        //   autoplay: false,
        //   speed: 500,
        //   loop: true,
        //   nested: "inner",
        //   prevButton: ".left__arrow-paletas",
        //   nextButton: ".right__arrow-paletas",
        //   dots: false,
        //   gutter: 20,
        //   nav: true,
        //   autoWidth: true,
        // });
        // tns({
        //   container: "#owl-three-inner-bolis",
        //   autoplay: false,
        //   speed: 500,
        //   loop: true,
        //   nested: "inner",
        //   dots: false,
        //   nav: true,
        //   autoWidth: true,
        // });
        // tns({
        //   container: "#owl-three-inner-helados",
        //   autoplay: false,
        //   speed: 500,
        //   loop: true,
        //   nested: "inner",
        //   dots: false,
        //   nav: true,
        //   autoWidth: true,
        // });
      },
      finalize: function () {
        // JavaScript to be fired on all pages, after page specific JS is fired
      },
    },
    // Home page
    home: {
      init: function () {
        // JavaScript to be fired on the home page
      },
      finalize: function () {
        // JavaScript to be fired on the home page, after the init JS
      },
    },
    // About us page, note the change from about-us to about_us.
    productos: {
      init: function () {
        var productosMenu = document.querySelectorAll(".productos__menu-a");

        productosMenu.forEach(function (option, index) {
          option.addEventListener("click", function () {
            option.classList.add("productos__menu-a-active");
            productosMenu.forEach(function (option, optionIndex) {
              if (optionIndex !== index) {
                option.classList.remove("productos__menu-a-active");
              }
            });
          });
        });

        tns({
          container: ".owl-paletas",
          items: 4,
          loop: true,
          gutter: 20,
          slideBy: 1,
        });

        tns({
          container: ".owl-bolis",
          items: 1,
          loop: true,
          gutter: 20,
        });

        tns({
          container: ".owl-helados",
          items: 1,
          gutter: 20,
        });

        var button = document.querySelector("[data-controls='next'");

        button.addEventListener("click", function () {
          var activeSlides = document.querySelectorAll(".tns-slide-active");
          console.log(activeSlides[0]);
          activeSlides.forEach(function (slide, index) {
            if (index === 1) {
              slide.style.transform = "scale(2)";
            } else {
              slide.style.transform = "scale(1)";
            }
          });
        });
      },
    },
    encuentranos: {
      init: function () {
        tns({
          container: ".maps__gallery",
          mode: "gallery",
          navContainer: ".maps__gallery-nav",
          arrowKeys: false,
          controls: false,
        });

        mapboxgl.accessToken =
          "pk.eyJ1IjoiZGF2aWRhcm1hbmRvIiwiYSI6ImNrY2Ixdnh1YzIxMTczNW9iOWpvM2liNzIifQ.PnNDoVNY-mHai_rYS7KiDQ";
        var cdmxMap = new mapboxgl.Map({
          container: "map-cdmx",
          style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
          center: [-99.1269, 19.4978], // starting position [lng, lat]
          zoom: 9, // starting zoom
        });

        var michMap = new mapboxgl.Map({
          container: "map-michoacan",
          style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
          center: [-102.0470391, 19.4170456], // starting position [lng, lat]
          zoom: 9, // starting zoom
        });

        var gdlMap = new mapboxgl.Map({
          container: "map-gdl",
          style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
          center: [-103.3940168, 20.6837092], // starting position [lng, lat]
          zoom: 9, // starting zoom
        });
      },
    },
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function (func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = funcname === undefined ? "init" : funcname;
      fire = func !== "";
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === "function";

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function () {
      // Fire common init JS
      UTIL.fire("common");

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, "_").split(/\s+/), function (
        i,
        classnm
      ) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, "finalize");
      });

      // Fire common finalize JS
      UTIL.fire("common", "finalize");
    },
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);
})(jQuery); // Fully reference jQuery after this point.
