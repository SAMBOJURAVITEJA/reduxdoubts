// store.js
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = { count: 0 };

const internetData = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};

const incrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + action.payload };
    case "Decrement":
      return { ...state, count: state.count - action.payload }; // Corrected the Decrement logic
    case "RESET":
      return { ...state, count: 0 }; // Reset count to 0
    default:
      return state;
  }
};

const tableReducer = (state = [], action) => {
  switch (action.type) {
    case "Increment Table":
      return [
        ...state,
        { id: action.payload.id, date: "Increment:- " + action.payload.date },
      ];
    case "Decrement Table":
      return [
        ...state,
        { id: action.payload.id, date: "Decrement:- " + action.payload.date },
      ];
    case "RESET Table":
      return [
        ...state,
        { id: action.payload.id, date: "RESET:- " + action.payload.date },
      ];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  increment: incrementReducer,
  table: tableReducer,
  internet: internetData
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
