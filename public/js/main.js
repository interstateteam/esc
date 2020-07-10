
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



// ~~~~~~~~~~~~~~~~~~~ INITIAL PAGELOAD ~~~~~~~~~~~~~~~~~~~~ //

// LOAD MENU SCROLL SCRIPT IF LANDING ON IDIVIDUAL PAGE//

function menuScroll() {
  let scrollpos = window.scrollY;
  const header = document.querySelector(
    "nav"
  );
  const add_class_on_scroll = () =>
    header.classList.add("fade-in");
  const remove_class_on_scroll = () =>
    header.classList.remove("fade-in");

  window.addEventListener(
    "scroll",
    function () {
      scrollpos = window.scrollY;

      if (scrollpos >= 200) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
    }
  );
}

menuScroll(console.log("scroll init"));

// LOAD EXTERNAL LINKS SCRIPT IF LANDING ON INDIVIDUAL PAGES //

function externalLinks() {
  for (
    var c = document.getElementsByTagName(
        "a"
      ),
      a = 0;
    a < c.length;
    a++
  ) {
    var b = c[a];
    b.getAttribute("href") &&
      b.hostname !== location.hostname &&
      (b.target = "_blank");
  }

}

externalLinks(console.log("external links init"));

// LOAD AOS SCRIPT IF LANDING ON INDIVIDUAL PAGES //

AOS.init(console.log("AOS init"));





  // GOOGLE ANALYTICS //


function googleAnalytics() {
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
  ga("send", "pageview");

}

googleAnalytics(console.log ('Google Analytics init'));


function init() {

  window.ga("set", "title", document.title);
  window.ga("set", "page", window.location.pathname + window.location.search);
  window.ga("send", "pageview");

  menuScroll(console.log("SWUP scroll enabled"));
  AOS.init(console.log("SWUP AOS enabled"));
  externalLinks(console.log("SWUP external links enabled"));
  googleAnalytics(console.log("SWUP Google Analytics enabled"));

  if (document.querySelector(".our_team")) {
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

    if ("addEventListener" in window) {
      window.addEventListener("resize", function () {
        sameHeights();
      });
      window.addEventListener("load", function () {
        sameHeights();
      });
    }
    console.log("SWUP same heights enabled");
  }


}


swup.on("contentReplaced", init);


function unload() {


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

    if ("addEventListener" in window) {
      window.addEventListener("resize", function () {
        sameHeights();
      });
      window.addEventListener("load", function () {
        sameHeights();
      });
    }

    console.log("SWUP same heights disabled");
  }


    menuScroll(console.log("SWUP scroll disabled"));
    AOS.init(console.log("SWUP AOS disabled"));
    externalLinks(console.log("SWUP external links disabled"));
    googleAnalytics(console.log("SWUP Google Analytics disabled"));
}


swup.on("willReplaceContent", unload);

