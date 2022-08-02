import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cocoatalk from "./modules/cocoatalk"

const middlewares = [thunk];
const rootReducer = combineReducers({cocoatalk});
const enhancer = applyMiddleware(...middlewares)

const Store = createStore(rootReducer, enhancer);

export default Store;