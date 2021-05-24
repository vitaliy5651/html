import { store } from './store';

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelector('.btn-group');
    const products = document.querySelectorAll('.product');

    const initialSize = store.getState().selectedFilter;
    if (initialSize !== null) {
        filterList(products);
        document.querySelector(`[data-size=${initialSize}]`).focus();
    }

    buttons.addEventListener('click', (e) => {
        if (e.target.dataset && e.target.dataset.size) {
            store.dispatch({ type: 'switchFilter', payload: e.target.dataset.size })
            filterList(products);
        }
    })
});

function filterList(products) {
    const param = store.getState().selectedFilter;
    for (let product of products) {
        if (product.dataset.size !== param) {
            product.classList.add('hide');
        } else {
            product.classList.remove('hide');
        }
    }
}