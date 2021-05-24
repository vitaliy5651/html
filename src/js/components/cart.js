import { store } from './store';

export class Cart {
    constructor() {
        this.items = [];
    } 

    countItem() {
        return store.getState().cartCounter;
    }

    getItemList() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
        store.dispatch({ type: 'addToCart' })
    }

    removeItem(index) {
        this.items.splice(index, 1);
    }
}
