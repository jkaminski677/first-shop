var faq = document.getElementsByClassName("faq-page");
var i;
for(i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var body = this.nextElementSibling;
        if( body.style.display === "block")
        {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}


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
        // console.log(elemen1);

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
        // console.log(elemen1);

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
        // console.log(elemen1);

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
        // console.log(elemen1);

        var index = 0, length = elemen1.length;
        for ( ; index  < length; index++) {
            elemen1[index].classList.replace("thing_to_buy","thing_to_buy2");
        }

    }
}



