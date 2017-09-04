"use strict"
//param:an array named book
export function addToCart(book){
    return{ 
        type:"add_to_cart",
        payload: book
    }

}