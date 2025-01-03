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
  storage, // Nơi lưu trữ: localStorage
  stateReconciler: autoMergeLevel2 // Gộp state cũ và mới một cách thông minh
};

const authConfig = {
  ...commonConfig, // Kế thừa cấu hình chung
  key: 'auth', // Tên khóa trong localStorage
  whitelist: ['isLoggedIn', 'token'] // Chỉ persist 'isLoggedIn' và 'token'
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer), // Bọc authReducer với persistReducer
  user: userReducer, // Không persist
  post: postReducer, // Không persist
  app: appReducer // Không persist
});

export default rootReducer;
