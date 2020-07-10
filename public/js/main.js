

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
swup.on("contentReplaced", init);


function init() {
      // AOS INIT BETWEEN SWUP PAGES //
      AOS.init();

      // MENU SCROLL INIT BETWEEN SWUP PAGES //
      new menuScroll();

      // Target all external links to _blank, simples.
      externalLinks();

      // ONLY LOAD THIS SCRIPT ON THE TEAM PAGE //

      // LOAD SAME HEIGHT SCRIPT ON INDIVIDUAL PAGE //


      if (document.querySelector("#team")) {
          sameHeights();

      }
    }


function unload() {
    // AOS UNLOAD //
    AOS.init();

    // MENU SCROLL UNLOAD //
    new menuScroll();

    // EXTERNAL LINKS UNLOAD //
    externalLinks();

    // UNLOAD SAMEHEIGHTS //
    if (document.querySelector("#team")) {
      sameHeights();
    }

}

swup.on("willReplaceContent", unload);



// ~~~~~~~~~~~~~~~~~~~ INITIAL PAGELOAD ~~~~~~~~~~~~~~~~~~~~ // 




  // LOAD MENU SCROLL SCRIPT IF LANDING ON IDIVIDUAL PAGE//

function menuScroll() {

  let scrollpos = window.scrollY;
  const header = document.querySelector("nav");
  const add_class_on_scroll = () => header.classList.add("fade-in");
  const remove_class_on_scroll = () => header.classList.remove("fade-in");

  window.addEventListener("scroll", function () {
    scrollpos = window.scrollY;

    if (scrollpos >= 200) {
      add_class_on_scroll();
    } else {
      remove_class_on_scroll();
    }

    console.log(scrollpos);
  });
}

new menuScroll();


// LOAD EXTERNAL LINKS SCRIPT IF LANDING ON INDIVIDUAL PAGES //

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


// LOAD AOS SCRIPT IF LANDING ON INDIVIDUAL PAGES //

AOS.init();



// LOAD SAMEHEIGHTS SCRIPT IF LANDING ON INDIVIDUAL PAGES //

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

  console.log("loaded!");
}


if ("addEventListener" in window) {
  window.addEventListener("resize", function () {
    sameHeights();
  });
  window.addEventListener("load", function () {
    sameHeights();
  });
}