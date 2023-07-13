let slide_wrapper = document.getElementById('slide-wrapper');
var currentSlide = 0;
let marginLeft = 0;


document.getElementById('previous').addEventListener('click', function() {
    if (currentSlide === 0) return;


    //change margin of the slider;
    marginLeft = marginLeft + 800;
    slide_wrapper.style.marginLeft = (marginLeft) + "px"
        --currentSlide;


})


document.getElementById('next').addEventListener('click', function() {
    if (currentSlide === 2) {
        currentSlide = 0;
    } else {
        ++currentSlide;
    }
    //change margin of the slider;
    marginLeft = -(800 * currentSlide)
    slide_wrapper.style.marginLeft = (marginLeft) + "px"


})