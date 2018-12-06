import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = { cid: "1421200056153" };

const labReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LAB":
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({ lab: labReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));
//store.subscribe(() => console.log("update", store.getState()));
export { store };
