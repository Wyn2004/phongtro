import rootReducers from "./store/reducers/rootReducer";
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk'

const reduxStore = () => {
    // applyMiddleware cho phep dispath 1 ham bat trong bo gia react va redux, thay vi dispath 1 object thuan
    // co the dispath ham
    const store = createStore(rootReducers, applyMiddleware(thunk)) // Hom sau se them middle ware
    const persistor = persistStore(store)

    return {store, persistor}
}

export default reduxStore