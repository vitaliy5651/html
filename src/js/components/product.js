import {Cart} from './cart';


document.addEventListener('DOMContentLoader',() =>{
    const cart = document.querySelector('#cart');
    const products = document.querySelector('.products');

    const Cart = new Cart();

    products.addEventListener('click', (event) =>{
        if(event.target.nodeName === 'BUTTON' && event.target.dataset.id){
            cart.addItem(event.target.dataset.id);
            badge.innerText = cart.countItem();
            console.log(cart.getItemList());
        }
    })
})