import React from 'react';
import {createContext} from 'react';

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {}, //for autocomletion sake
    updateItemQuantity: () => {}
});{}
