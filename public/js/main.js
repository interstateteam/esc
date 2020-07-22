
// // MENU SCROLL //

//       let scrollpos = window.scrollY;
//       const header = document.querySelector("nav");
//       const header_height = header.offsetHeight;

//       const add_class_on_scroll = () =>
//         header.classList.add("fade-in");
//       const remove_class_on_scroll = () =>
//         header.classList.remove("fade-in");

//       window.addEventListener("scroll", function () {
//         scrollpos = window.scrollY;

//         if (scrollpos >= 200) {
//           add_class_on_scroll();
//         } else {
//           remove_class_on_scroll();
//         }

//         console.log(scrollpos);
//       });


  
// const options = {
//   plugins: [
//     new SwupBodyClassPlugin(),
//     new SwupHeadPlugin(),
//     new SwupGaPlugin(),
//     new SwupScrollPlugin({
//       animateScroll: false,
//       doScrollingRightAway: true,
//     }),
//   ],
  
// };

// const swup = new Swup(options);

// function init() {

AOS.init();


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

          if (scrollpos >= 50) {
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
      // }


// swup.on("contentReplaced", init);






// function unload() {


// }

// swup.on("willReplaceContent", unload);

// AOS.init();




