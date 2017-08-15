"use strict";
import { createStore } from "redux";

//step 3 define reducers in order to create the store
//create reducer by passing two arguments, set the initial value for the state
const reducer = function(state = 0, action) {
  console.log("reducer...");
  console.log("state: ", state, "action: ", action);
  //the use of reducers are evaluate what to do
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
      break;
  }
  return state;
};

//step 1 create the store
const store = createStore(reducer);
console.log("store: ", store);
//see the current of store, use the subscript method
store.subscribe(function() {
  console.log("current state: " + store.getState());
});

//step 2 create and dispatch actions
//an action is made by an object that has two properties
store.dispatch({ type: "INCREMENT", payload: 1 });

store.dispatch({ type: "INCREMENT", payload: 1 });

store.dispatch({ type: "INCREMENT", payload: 1 });
//type, key words in redux, payload, call it as you wish
