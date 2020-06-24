
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

    // if (document.querySelector('#myVideo')) {
    //     const el = document.querySelector("video");
    //     const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
    //     observer.observe();
    // }

}


function unload() {
     
    // if (document.querySelector("#myVideo")) {
    //   const el = document.querySelector("video");
    //   const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
    //   observer.observe();
    // }

}



swup.on("willReplaceContent", unload);




AOS.init();