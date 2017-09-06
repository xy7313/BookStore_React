"use strict";

export function booksReducers(state = { books: [
    {
      id:1,
      title:'book title',
      description:'im a book',
      price:10000
    },
    {
      id:2,
      title:'book title2',
      description:'im another book',
      price:10002
    }
  ] }, action) {
  switch (action.type) {
    case "get_books":
    return {...state,book:[...state.books]}
    case "post_book":
      //we want add third book in, with out this concat, third book overwrite previous payload,
      //never use push to concatenate array in redux, use concat method,
      //because, push is a mutable, in redux, should never mutate the state
      // let books = state.books.concat(action.payload);
      // return {books};
      return { books: [...state.books, ...action.payload] };
      break;
    case "delete_book":
      const currentBookToDelete = [...state.books];
      const indexToDelete = currentBookToDelete.findIndex(
        // (book)=>{book.id===action.payload.id;}
        function(book) {
          return book.id === action.payload.id;
        }
      );
      console.log("delete", action.payload.id);

      return {
        books: [
          ...currentBookToDelete.slice(0, indexToDelete),
          ...currentBookToDelete.slice(indexToDelete + 1)
        ]
      };
      break;
    case "update_book":
      const currentBookToUpdate = [...state.books];
      const indexToUpdate = currentBookToUpdate.findIndex(
        // (book)=>{book.id===action.payload.id;}
        function(book) {
          return book.id === action.payload.id;
        }
      );
      const bookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title
      };
      console.log("update", bookToUpdate);

      return {
        books: [
          ...currentBookToUpdate.slice(0, indexToUpdate),
          bookToUpdate,
          ...currentBookToUpdate.slice(indexToUpdate + 1)
        ]
      };
      break;
  }
  return state;
}
