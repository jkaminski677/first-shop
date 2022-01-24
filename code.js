// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// const images = document.querySelectorAll("slideimages")

// let i = 0;

// setInterval(function() {

//   images.forEach( (slideimages, i) => {
//     slideimages.style.display = 'none';
//   })

//   images[i].getElementsByClassName.display = 'block';
//   i++;
// }, 2000);

// var i = 0;
// var time = 1000;
// // var images = [
// //   'images/zd1.jpg',
// //   'images/zd2.jpg',
// //   'images/zd4.jpg',
// //   'images/zd5.jpg',
// //   'images/zd6.jpg',
// //   'images/zd7.webp' ];


// function changeImg() {
//     // document.slide.src = images[i];
//     var slides = document.getElementsByClassName("slide");

//     // if(i < images.length -1){
//     //     i++
//     // }else{
//     //     i = 0;
//     // }
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "block";
//     }
//     slides[slideIndex-1].style.display = "block";
    
//     setTimeout("changeImg()", time);
// }

// window.onload = changeImg;