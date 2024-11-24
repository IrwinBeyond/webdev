//ambil element ID
const cart_items = document.getElementById('cart');

//ES6
const your_cart =  ['NVIDIA Geforce RTX 4060 TI', 'Intel Core i9-14900KS', 'MOBO ROG MAXIMUS Z790 EXTREME'];

let parent = '<ul>';
your_cart.forEach((cart) => {
    parent += '<li>' + cart + '</li>';
    console.log(`${cart}`);
});

parent += '</ul>';
cart_items.innerHTML = parent;