
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


swup.on("pageView", function () {
                                  // ~~~~~~~~~~~~~~~~~~~ INITIAL PAGELOAD ~~~~~~~~~~~~~~~~~~~~ //

                                  const mountGlobal = function () {
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

                                      console.log("scroll enabled");
                                    }

                                    new menuScroll();

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

                                      console.log("external links enabled");
                                    }

                                    externalLinks();

                                    // LOAD AOS SCRIPT IF LANDING ON INDIVIDUAL PAGES //

                                    AOS.init(console.log("AOS enabled"));
                                  };

                                  mountGlobal();






                                  
                                  // LOAD SAMEHEIGHTS SCRIPT IF LANDING ON INDIVIDUAL PAGES //
                                  if (document.querySelector(".our_team")) {
                                    function sameHeights(selector) {
                                      var selector =
                                          selector ||
                                          '[data-key="sameHeights"]',
                                        query = document.querySelectorAll(
                                          selector
                                        ),
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
                                      window.addEventListener(
                                        "resize",
                                        function () {
                                          sameHeights();
                                        }
                                      );
                                      window.addEventListener(
                                        "load",
                                        function () {
                                          sameHeights();
                                        }
                                      );
                                    }
                                    console.log("SWUP same heights enabled");
                                  }
                                });






// swup.on("pageView", init);

// function init() {


// }





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
}


swup.on("willReplaceContent", unload);

