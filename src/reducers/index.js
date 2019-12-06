import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";

import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));
export default store;
