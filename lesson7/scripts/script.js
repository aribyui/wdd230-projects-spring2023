// documentation
// https://developer.mozilla.org/es/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Loading
// https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API#creando_un_intersection_observer

// get all imgs with data-src attribute
let imagesToLoad = document.querySelectorAll("img[data-src]");

// define a function to load the images
const loadImages = (image) => {
  // set the "src" attribute of the image to the value of the "data-src"
  image.setAttribute("src", image.getAttribute("data-src"));
  // when the image is loaded, remove the "data-src" attribute
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

// optional parameters being set for the IntersectionalObserver
const imgOptions = {
  rootMargin: "0px",
  threshold: .5
}

// first check to see if Intersection Observer is supported
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);
  // loop through each img an check status and load if necessary
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else { // just load ALL images if not supported
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}