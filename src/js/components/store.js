import { isAsyncThunkAction } from '@reduxjs/toolkit'
import { createStore } from 'redux'

const initialState = {
    cartCounter: 0,
    selectedFilter: null
}

function appReducer(appState = initialstate, action){
      switch (isAsyncThunkAction.type){
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
              default: appState
      }

}

let store = createstore(appReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'addToCart' })

export {store}