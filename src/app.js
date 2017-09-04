// "use strict";
import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';

//{}, find the obj in {} from '', without {} means import the obj which is export in '' and name it as reducers
import  reducers  from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBook,deleteBook,updateBook} from './actions/bookActions';

//store,state
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);
store.subscribe(function() {
  console.log("current state: " , store.getState());
  // console.log("current state: " , store.getState().price);
  // when the payload is an array:
  // console.log("current state: " , store.getState()[1].price);

});

//action
store.dispatch(postBook(
  [
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
  ]
));
store.dispatch(deleteBook({id:1}));
store.dispatch(updateBook(
  {
      id:2,
      title:'book title updated'
    }
));
store.dispatch(addToCart([{id:1}]));


//when all in one file
//action, we can write a sequence dispatches of actions
// store.dispatch({
//   type:"post_book",
//   payload:[
//     {
//       id:1,
//       title:'book title',
//       description:'im a book',
//       price:10000
//     },
//     {
//       id:2,
//       title:'book title2',
//       description:'im another book',
//       price:10002
//     }
//   ]
// });

// store.dispatch({
//   type:"post_book",
//   payload:[
//     {
//       id:3,
//       title:'book title3',
//       description:'im a 3rd book',
//       price:10003
//     },
//   ]
// });
// store.dispatch({
//   type:"delete_book",
//   payload:{id:1}, 
// });

// store.dispatch({
//   type:"update_book",
//   payload:
//     {
//       id:2,
//       title:'book title updated'
//     }
// });

// store.dispatch({
//   type:"add_to_cart",
//   payload:[{id:1}]
// });


// //reducer
// //when payload is an array, state = [], when payload only have one obj, state = {}
// const reducer = function(state = {books:[]}, action) {
//   switch (action.type) {
//     case "post_book":
//     //we want add third book in, with out this concat, third book overwrite previous payload,
//     //never use push to concatenate array in redux, use concat method, 
//     //because, push is a mutable, in redux, should never mutate the state
//       // let books = state.books.concat(action.payload);
//       // return {books};
//       return {books:[...state.books,...action.payload]}
//       break;
//     case "delete_book":
//       const currentBookToDelete = [...state.books];
//       const indexToDelete = currentBookToDelete.findIndex(
//         // (book)=>{book.id===action.payload.id;}
//         function(book){
//           return book.id===action.payload.id;
//         }
//       )
//             console.log("delete",action.payload.id);

//       return {books:[...currentBookToDelete.slice(0,indexToDelete),
//         ...currentBookToDelete.slice(indexToDelete+1)]}
//       break;
//     case "update_book":
//       const currentBookToUpdate = [...state.books];
//       const indexToUpdate = currentBookToUpdate.findIndex(
//         // (book)=>{book.id===action.payload.id;}
//         function(book){
//           return book.id===action.payload.id;
//         }
//       );
//       const bookToUpdate = {
//         ...currentBookToUpdate[indexToUpdate],
//         title:action.payload.title
//       };
//             console.log("update",bookToUpdate);

//       return {books:[...currentBookToUpdate.slice(0,indexToUpdate),bookToUpdate,
//         ...currentBookToUpdate.slice(indexToUpdate+1)]}
//       break;

//   }
//   return state;
// };