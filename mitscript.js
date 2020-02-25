 "use strict";

 //Slideshow
 let slideIndex = 1;
 showSlides(slideIndex);

 // Næste og forrige knapperne
 function plusSlides(n) {
     showSlides(slideIndex += n);
 }

 function currentSlide(n) {
     showSlides(slideIndex = n);
 }

 //Hvilket slide der bliver vist
 function showSlides(n) {
     let i;

     //Listen er billederne, der er sat ind
     let slides = document.getElementsByClassName("mySlides");

     //Loopet er at billederne går i et loop og kommer tilbage til start
     let dots = document.getElementsByClassName("dot");
     if (n > slides.length) {
         slideIndex = 1
     }
     if (n < 1) {
         slideIndex = slides.length
     }
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";
 }




 //Lydafspilning knapper, manuel trykning
 const audioObj = new Audio("Closing Time - Relaxing Jazz Chill Cafe Music.mp3");

 document.getElementById("spil").addEventListener("click", function () {
     audioObj.play()
 })

 document.getElementById("mute").addEventListener("click", function () {
     audioObj.pause()
 })

 //Videoafspilning, hvis videoen er synlig, så afspilles den.
 const video = document.getElementById("video")
 console.log(video)
 if (erSynlig("video")) {
     video.play()
 } else {
     video.pause()
 }
