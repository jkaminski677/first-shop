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
/*

var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        // Toggle between adding and removing the "active" class,
        // to highlight the button that controls the panel
        this.classList.toggle("active");
        // /* Toggle between hiding and showing the active panel
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

*/


function myFunction() {
    // document.getElementById('changeview').style.display='none';
    //document.getSelectorAll(".chang_view_but").style.display='none';
    if (document.getElementById("shop2").className = "inshop1")
    {
        console.log("Hello motherfather.");
        // document.getElementById("shop2").classList.remove("inshop")
        document.getElementById("shop2").classList.replace("inshop1","inshop");
        // document.getElementById("shop2").classList.toggle("inshop2")

        var elemen1 = document.querySelectorAll('[id^="nvm"]');
        console.log(elemen1);

        var index = 0, length = elemen1.length;
        for ( ; index  < length; index++) {
            elemen1[index].classList.replace("thing_to_buy1","thing_to_buy");
        }
    }
    if (document.getElementById("shop2").className = "inshop2")
    {
        console.log("Hello motherfather.");
        // document.getElementById("shop2").classList.remove("inshop")
        document.getElementById("shop2").classList.replace("inshop2","inshop");
        // document.getElementById("shop2").classList.toggle("inshop2")

        var elemen1 = document.querySelectorAll('[id^="nvm"]');
        console.log(elemen1);

        var index = 0, length = elemen1.length;
        for ( ; index  < length; index++) {
            elemen1[index].classList.replace("thing_to_buy2","thing_to_buy");
        }
    }

}

function myFunction1() {
    // document.getElementById('changeview').style.display='none';
    //document.getSelectorAll(".chang_view_but").style.display='none';
    if (document.getElementById("shop2").className = "inshop")
    {
        // document.getElementById("shop2").classList.remove("inshop")
        document.getElementById("shop2").classList.replace("inshop","inshop1");
        // document.getElementById("shop2").classList.toggle("inshop");
        // document.getElementById("shop2").classList.toggle("inshop2");
        var elemen1 = document.querySelectorAll('[id^="nvm"]');
        var index = 0, length = elemen1.length;
        for ( ; index  < length; index++) {
            elemen1[index].classList.replace("thing_to_buy","thing_to_buy1");
        }

    }
    if (document.getElementById("shop2").className = "inshop2")
    {
        // document.getElementById("shop2").classList.remove("inshop")
        document.getElementById("shop2").classList.replace("inshop2","inshop1");
        // document.getElementById("shop2").classList.toggle("inshop");
        // document.getElementById("shop2").classList.toggle("inshop2");
        var elemen1 = document.querySelectorAll('[id^="nvm"]');
        var index = 0, length = elemen1.length;
        for ( ; index  < length; index++) {
            elemen1[index].classList.replace("thing_to_buy2","thing_to_buy1");
        }

    }
}



function myFunction2() {
    // document.getElementById('changeview').style.display='none';
    //document.getSelectorAll(".chang_view_but").style.display='none';
    if (document.getElementById("shop2").className = "inshop2")
    {
        console.log("Hello motherfather.");
        // document.getElementById("shop2").classList.remove("inshop")
        document.getElementById("shop2").classList.replace("inshop1","inshop2");
        // document.getElementById("shop2").classList.toggle("inshop2")

        var elemen1 = document.querySelectorAll('[id^="nvm"]');
        console.log(elemen1);

        var index = 0, length = elemen1.length;
        for ( ; index  < length; index++) {
            elemen1[index].classList.replace("thing_to_buy1","thing_to_buy2");
        }

    }
    if (document.getElementById("shop2").className = "inshop")
    {
        console.log("Hello motherfather.");
        // document.getElementById("shop2").classList.remove("inshop")
        document.getElementById("shop2").classList.replace("inshop","inshop2");
        // document.getElementById("shop2").classList.toggle("inshop2")

        var elemen1 = document.querySelectorAll('[id^="nvm"]');
        console.log(elemen1);

        var index = 0, length = elemen1.length;
        for ( ; index  < length; index++) {
            elemen1[index].classList.replace("thing_to_buy","thing_to_buy2");
        }

    }
}
