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
      },
      finalize: function () {
        // JavaScript to be fired on all pages, after page specific JS is fired
      },
    },
    // Home page
    home: {
      init: function () {
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

        tns({
          container: ".owl-three",
          mode: "gallery",
          autoplay: false,
          items: 1,
          speed: 500,
          navContainer: ".owl-three-nav",
          controls: false,
          nested: "outer",
          loop: false,
        });

        $(".slider-paletas").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: ".slider-paletas-nav",
          infinite: true,
        });
        $(".slider-paletas-nav").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: ".slider-paletas",
          focusOnSelect: true,
          infinite: true,
        });

        $(".slider-bolis").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: ".slider-bolis-nav",
          infinite: true,
        });
        $(".slider-bolis-nav").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: ".slider-bolis",
          focusOnSelect: true,
          infinite: true,
        });

        $(".slider-helados").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: ".slider-helados-nav",
          infinite: true,
        });
        $(".slider-helados-nav").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: ".slider-helados",
          focusOnSelect: true,
          infinite: true,
        });
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
          zoom: 11, // starting zoom
        });

        cdmxMap.on("load", function () {
          cdmxMap.loadImage(
            "../../wp-content/themes/yiju/dist/images/Icon/icon_pointer-01.png",
            function (error, image) {
              if (error) throw error;
              cdmxMap.addImage("custom-marker", image);

              cdmxMap.addSource("places", {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: [
                    {
                      type: "Feature",
                      properties: {
                        description:
                          "<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
                      },
                      geometry: {
                        type: "Point",
                        coordinates: [-99.2014233, 19.3909868],
                      },
                    },
                    {
                      type: "Feature",
                      properties: {
                        description:
                          "<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
                      },
                      geometry: {
                        type: "Point",
                        coordinates: [-99.2005473, 19.3918029],
                      },
                    },
                  ],
                },
              });

              // Add a layer showing the places.
              cdmxMap.addLayer({
                id: "places",
                type: "symbol",
                source: "places",
                layout: {
                  "icon-image": "custom-marker",
                  "icon-allow-overlap": true,
                  "icon-size": 0.3,
                },
              });
            }
          );

          // Create a popup, but don't add it to the map yet.
          var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false,
          });

          cdmxMap.on("mouseenter", "places", function (e) {
            // Change the cursor style as a UI indicator.
            cdmxMap.getCanvas().style.cursor = "pointer";

            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates).setHTML(description).addTo(cdmxMap);
          });

          cdmxMap.on("mouseleave", "places", function () {
            cdmxMap.getCanvas().style.cursor = "";
            popup.remove();
          });

          cdmxMap.on("click", "places", function (e) {
            cdmxMap.flyTo({
              center: e.features[0].geometry.coordinates,
              zoom: 13,
            });
          });
        });

        var michMap = new mapboxgl.Map({
          container: "map-michoacan",
          style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
          center: [-102.0470391, 19.4170456], // starting position [lng, lat]
          zoom: 11, // starting zoom
        });

        michMap.on("load", function () {
          michMap.loadImage(
            "../../wp-content/themes/yiju/dist/images/Icon/icon_pointer-01.png",
            function (error, image) {
              if (error) throw error;
              michMap.addImage("custom-marker", image);

              michMap.addSource("places", {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: [
                    {
                      type: "Feature",
                      properties: {
                        description:
                          "<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
                      },
                      geometry: {
                        type: "Point",
                        coordinates: [-102.0593373, 19.4124398],
                      },
                    },
                    {
                      type: "Feature",
                      properties: {
                        description:
                          "<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
                      },
                      geometry: {
                        type: "Point",
                        coordinates: [-102.079733, 19.4239057],
                      },
                    },
                  ],
                },
              });

              // Add a layer showing the places.
              michMap.addLayer({
                id: "places",
                type: "symbol",
                source: "places",
                layout: {
                  "icon-image": "custom-marker",
                  "icon-allow-overlap": true,
                  "icon-size": 0.3,
                },
              });
            }
          );

          // Create a popup, but don't add it to the map yet.
          var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false,
          });

          michMap.on("mouseenter", "places", function (e) {
            // Change the cursor style as a UI indicator.
            michMap.getCanvas().style.cursor = "pointer";

            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates).setHTML(description).addTo(michMap);
          });

          michMap.on("mouseleave", "places", function () {
            michMap.getCanvas().style.cursor = "";
            popup.remove();
          });

          michMap.on("click", "places", function (e) {
            michMap.flyTo({
              center: e.features[0].geometry.coordinates,
              zoom: 13,
            });
          });
        });

        var gdlMap = new mapboxgl.Map({
          container: "map-gdl",
          style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
          center: [-103.3940168, 20.6837092], // starting position [lng, lat]
          zoom: 11, // starting zoom
        });

        gdlMap.on("load", function () {
          gdlMap.loadImage(
            "../../wp-content/themes/yiju/dist/images/Icon/icon_pointer-01.png",
            function (error, image) {
              if (error) throw error;
              gdlMap.addImage("custom-marker", image);

              gdlMap.addSource("places", {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: [
                    {
                      type: "Feature",
                      properties: {
                        description:
                          "<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
                      },
                      geometry: {
                        type: "Point",
                        coordinates: [-103.4054535, 20.6737777],
                      },
                    },
                    {
                      type: "Feature",
                      properties: {
                        description:
                          "<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
                      },
                      geometry: {
                        type: "Point",
                        coordinates: [-103.4093672, 20.6749417],
                      },
                    },
                  ],
                },
              });

              // Add a layer showing the places.
              gdlMap.addLayer({
                id: "places",
                type: "symbol",
                source: "places",
                layout: {
                  "icon-image": "custom-marker",
                  "icon-allow-overlap": true,
                  "icon-size": 0.3,
                },
              });
            }
          );

          // Create a popup, but don't add it to the map yet.
          var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false,
          });

          gdlMap.on("mouseenter", "places", function (e) {
            // Change the cursor style as a UI indicator.
            gdlMap.getCanvas().style.cursor = "pointer";

            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates).setHTML(description).addTo(gdlMap);
          });

          gdlMap.on("mouseleave", "places", function () {
            gdlMap.getCanvas().style.cursor = "";
            popup.remove();
          });

          gdlMap.on("click", "places", function (e) {
            gdlMap.flyTo({
              center: e.features[0].geometry.coordinates,
              zoom: 13,
            });
          });
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
