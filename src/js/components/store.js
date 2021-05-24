import { createStore } from 'redux';

const initialState = {
    cartCounter: 0,
    selectedFilter: 'm'
}

function appReducer(appState = initialState, action) {
    switch (action.type) {
        case 'addToCart':
            return { 
                ...appState,
                cartCounter: appState.cartCounter + 1 
            }
        case 'switchFilter': 
            return {
                ...appState,
                selectedFilter: action.payload
            }
        default:
            return appState;
    }

}

let store = createStore(appReducer);

store.subscribe(() => console.log(store.getState()));

export { store };