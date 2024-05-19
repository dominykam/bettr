//Initializing slideshow
let slideIndex = 1; //keeps track of the current slide being displayed
showSlides(slideIndex);


// Dot image controls
function currentSlide(n) { //triggered when dot is clicked, n-slide number that corresponds to clicked dot
  showSlides(slideIndex = n);//updates slideshow to display the slie corresponding to the new slideIndex
}


//Showing slides function
function showSlides(n) { //controls which slide is displayed
  let i;
  let slides = document.getElementsByClassName("slides"); //retrieves all elements with class name slides
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  } //if n > number of slides, slideIndex is set to 1 (it loops back to the first slide)
  if (n < 1) {
    slideIndex = slides.length;
  } //if n < 1,slideIndex is set to last slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //loops through all slides and hides them by setting display to none
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); //loops thorugh all dots and removes "active" class,which highlights the active slide
  }
  slides[slideIndex - 1].style.display = "block"; //makes current slide visible
  dots[slideIndex - 1].className += " active"; //adds "active" class to current dot to show which slide is currently displayed
}
