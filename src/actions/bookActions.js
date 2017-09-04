"use strict"

export function postBook(book){
    return {
        type:"post_book",
        payload: book
    }
}

export function deleteBook(id){
    return {
        type:"delete_book",
        payload: id
    }
}

export function updateBook(id){
    return {
        type:"update_book",
        payload: id
    }
}
