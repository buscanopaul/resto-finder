import {combineReducers, configureStore} from '@reduxjs/toolkit';
import homeReducer from './slice/homeSlice';
import detailReducer from './slice/detailSlice';

export default configureStore({
  reducer: {
    home: homeReducer,
    detail: detailReducer,
  },
});
