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


  //DOM manipulations: The code manipulates the DOM elements to display and hide slides based on the current slide index (slides[i].style.display = "none" 
  //and slides[slideIndex - 1].style.display = "block").

//Event listeners: The currentSlide function is triggered when a dot is clicked, updating the slide index and invoking showSlides to display the corresponding slide
// (showSlides(slideIndex = n)).
}



//Progress Bar 
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', function() {
  let width = 0;
  const interval = setInterval(function() {
    if (width >= 15) { // Stop at 15%
      clearInterval(interval);
      return;
    }
    width += 1; // Increase by 1%
    progressBar.style.width = width + '%';
    progressText.innerText = width + '%';
  }, 50); // Increase more frequently for smoother animation



  //DOM manipulations: The JavaScript code manipulates the DOM elements to update the progress bar's width (progressBar.style.width) and display the progress percentage 
  //(progressText.innerText).

//Event listeners: The JavaScript code adds an event listener to the button element (startButton.addEventListener) to trigger the progress bar animation when clicked.
});



