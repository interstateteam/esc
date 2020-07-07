
// MENU SCROLL //

      let scrollpos = window.scrollY;
      const header = document.querySelector("nav");
      const header_height = header.offsetHeight;

      const add_class_on_scroll = () =>
        header.classList.add("fade-in");
      const remove_class_on_scroll = () =>
        header.classList.remove("fade-in");

      window.addEventListener("scroll", function () {
        scrollpos = window.scrollY;

        if (scrollpos >= 200) {
          add_class_on_scroll();
        } else {
          remove_class_on_scroll();
        }

        console.log(scrollpos);
      });




  
const options = {
  plugins: [
    new SwupBodyClassPlugin(),
    new SwupHeadPlugin(),
    new SwupGaPlugin(),
    new SwupScrollPlugin({
      animateScroll: false,
      doScrollingRightAway: true,
    }),
  ],
  
};

const swup = new Swup(options);

function init() {


  //  GOOGLE ANALYTICS // 

  (function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
      i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "https://www.google-analytics.com/analytics.js",
    "ga"
  );

  ga("create", "UA-XXXXX-Y", "auto");
  window.ga("set", "title", document.title);
  window.ga("set", "page", window.location.pathname + window.location.search);
  window.ga("send", "pageview");




        // MENU SCROLL //

        let scrollpos = window.scrollY;
        const header = document.querySelector("nav");
        const header_height = header.offsetHeight;

        const add_class_on_scroll = () =>
          header.classList.add("fade-in");
        const remove_class_on_scroll = () =>
          header.classList.remove("fade-in");

        window.addEventListener("scroll", function () {
          scrollpos = window.scrollY;

          if (scrollpos >= 200) {
            add_class_on_scroll();
          } else {
            remove_class_on_scroll();
          }

          console.log(scrollpos);
        });



        // Target all external links to _blank, simples.

        function externalLinks() {
          for (
            var c = document.getElementsByTagName("a"), a = 0;
            a < c.length;
            a++
          ) {
            var b = c[a];
            b.getAttribute("href") &&
              b.hostname !== location.hostname &&
              (b.target = "_blank");
          }
        }
        externalLinks();

        if (document.querySelector("#team")) {
          function sameHeights(selector) {
            var selector = selector || '[data-key="sameHeights"]',
              query = document.querySelectorAll(selector),
              elements = query.length,
              max = 0;
            if (elements) {
              while (elements--) {
                var element = query[elements];
                if (element.clientHeight > max) {
                  max = element.clientHeight;
                }
              }
              elements = query.length;
              while (elements--) {
                var element = query[elements];
                element.style.height = max + "px";
              }
            }
          }

          sameHeights();
        }
      }


swup.on("contentReplaced", init);



AOS.init();




// function unload() {


// }

// swup.on("willReplaceContent", unload);






