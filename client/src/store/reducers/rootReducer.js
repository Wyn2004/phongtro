import userReducer from './userReduces';
import authReducer from './authReducer';
import postReducer from './postReducer';
import appReducer from './app';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { persistReducer } from 'redux-persist';

// dinh nghia o file root reducer de choc vao  nhung file reducer khac
const commonConfig = {
  storage,
  stateReconciler: autoMergeLevel2
};

const authConfig = {
  ...commonConfig,
  key: 'auth',
  whitelist: ['isLoggedIn', 'token']
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  user: userReducer,
  post: postReducer,
  app: appReducer
});

export default rootReducer;
