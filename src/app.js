// "use strict";
import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';

//{}, find the obj in {} from '', without {} means import the obj which is export in '' and name it as reducers
import  reducers  from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks,deleteBooks,updateBooks} from './actions/bookActions';

import React from 'react';
import {render} from 'react-dom';
import BooksList from './components/pages/booksList';
import {Provider} from 'react-redux';

//store,state
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);   

 render(
  <Provider store={store}>
    <BooksList />
  </Provider>, document.getElementById('app')
 );
        

//action
// store.dispatch(postBooks(
//   [
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
// ));
// store.dispatch(deleteBooks({id:1}));
// store.dispatch(updateBooks(
//   {
//       id:2,
//       title:'book title updated'
//     }
// ));
// store.dispatch(addToCart([{id:1}]));


