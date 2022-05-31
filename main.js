let carts = document.querySelectorAll('.glow-on-hover');

for ( let i = 0; i < carts.length; i++)
{
    carts[i].addEventListener('click', () => {
        console.log("Added to cart");
    })
}


function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    console.log(productNumbers);
    console.log(typeof productNumbers);

    productNumbers =  parseInt(productNumbers);
    localStorage.setItem('cartNumbers', 1)
    console.log(typeof productNumbers);
}