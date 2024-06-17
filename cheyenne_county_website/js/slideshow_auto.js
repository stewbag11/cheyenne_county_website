// Auto slideshow
let slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexAuto++;
  if (slideIndexAuto > slides.length) { slideIndexAuto = 1; }
  slides[slideIndexAuto - 1].style.display = "block";
  setTimeout(showSlidesAuto, 5000); // Change image every 5 seconds
}