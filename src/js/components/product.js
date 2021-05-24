import { Cart } from './cart';

document.addEventListener('DOMContentLoaded', () => {

    const cartBtn = document.querySelector('#cart');
    const products = document.querySelector('.products');
    const badge = document.querySelector('#badge');

    const cart = new Cart();
    if (products) {
        products.addEventListener('click', (event) => {
            if (event.target.nodeName === 'BUTTON' && event.target.dataset.id) {
                cart.addItem(event.target.dataset.id);
                badge.innerText = cart.countItem();
            }
        })
    }
    

})