// The debounce function receives our function as a parameter
const debounce = (fn) => {

  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) { 
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      
      // Call our function and pass any params we received
      fn(...params);
    });

  } 
};


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();

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


function unload() {

       if (document.querySelector("#team")) {
         // equal columns
         // lovely work from
         // https://benhowdle.im/easy-peasy-equal-heights.html
         // see also additonal options.

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

swup.on("willReplaceContent", unload);






