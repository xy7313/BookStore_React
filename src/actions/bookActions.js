"use strict"

export function getBooks(book){
    return {
        type:"get_book"
    }
}

export function postBooks(book){
    return {
        type:"post_book",
        payload: book
    }
}

export function deleteBooks(id){
    return {
        type:"delete_book",
        payload: id
    }
}

export function updateBooks(id){
    return {
        type:"update_book",
        payload: id
    }
}
