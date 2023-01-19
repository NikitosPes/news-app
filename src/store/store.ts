import { combineReducers, configureStore } from '@reduxjs/toolkit';
import articlesReducer from './reducers/ArticlesSlice';

const rootReducer = combineReducers({
  articlesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];
