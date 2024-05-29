const slides = document.querySelectorAll(".slide");
var counter = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const gonext = () => {
  counter++;
  slideimage();
};

const goprev = () => {
  counter--;
  slideimage();
};
const slideimage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
