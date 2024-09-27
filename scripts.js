let slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let slideId = [
    "mySlides1",
    "mySlides2",
    "mySlides3",
    "mySlides4",
    "mySlides5",
    "mySlides6",
    "mySlides7",
    "mySlides8",
    "mySlides9",
    "mySlides10",
];
let dotId = [
    "dot1",
    "dot2",
    "dot3",
    "dot4",
    "dot5",
    "dot6",
    "dot7",
    "dot8",
    "dot9",
    "dot10",
];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);

function plusSlides(n, no) {
    showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
    console.log("showSlide", n, no);
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    let dots = document.getElementsByClassName(dotId[no]);

    if (n > x.length) {
        slideIndex[no] = 1;
    }
    if (n < 1) {
        slideIndex[no] = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; // Hide all slides
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Reset all dots
    }
    x[slideIndex[no] - 1].style.display = "block"; // Show the current slide
    dots[slideIndex[no] - 1].className += " active"; // Mark the current dot as active
}
