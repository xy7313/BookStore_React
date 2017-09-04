"use strict";
import { createStore } from "redux";

//step 3 define reducers in order to create the store
//create reducer by passing two arguments, set the initial value for the state
//set initial value to state in function()
//the use of reducers are evaluate what to do using switch
const reducer = function(state = 0, action) {
  console.log("reducer...state: ", state, "action: ", action);
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
      break;
    case "decrement":
      return state - action.payload;
      break;
  }
  return state;
};

//step 1 create the store, pass reducers as parameter
//see the current of store, use the subscript method, add listener,
const store = createStore(reducer);
console.log("store: ", store);
store.subscribe(function() {
  console.log("current state: " + store.getState());
});

//step 2 create and dispatch actions
//an action is made by an object that has two properties, type and payload
//type, key words in redux, payload, call it as you wish
store.dispatch({ type: "INCREMENT", payload: 1 });

store.dispatch({ type: "INCREMENT", payload: 1 });

store.dispatch({ type: "decrement", payload: 1 });
