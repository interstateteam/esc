




const options = {
  plugins: [
    new SwupBodyClassPlugin(),
    new SwupHeadPlugin(),
    new SwupScrollPlugin({
      animateScroll: false,
      doScrollingRightAway: true,
    }),
  ],
  
};

const swup = new Swup(options);

function init() {

    if (document.querySelector('#team')) {
      // equal columns
      // lovely work from
      // https://benhowdle.im/easy-peasy-equal-heights.html
      // see also additonal options.

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
            if (
              element.clientHeight > max
            ) {
              max = element.clientHeight;
            }
          }
          elements = query.length;
          while (elements--) {
            var element = query[elements];
            element.style.height =
              max + "px";
          }
        }
      }

      sameHeights();

      
    }

}


function unload() {
     
    // if (document.querySelector("#myVideo")) {
    //   const el = document.querySelector("video");
    //   const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
    //   observer.observe();
    // }

}

swup.on("willReplaceContent", unload);









// Target all external links to _blank, simples.

function externalLinks() {
  for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
    var b = c[a];
    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
  }
}
;
externalLinks();
