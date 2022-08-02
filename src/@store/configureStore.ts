// example - https://github.com/theobroma/rtk-query-toptal-example/blob/41ea72e4ad62ff6ec4a1e2a8f84b17301f7577e0/src/shared/redux/store.ts
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';

import type { Reducer } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { forecastReducer, forecastSlice } from './forecast/slice';
import { searchReducer, searchSlice } from './search/slice';
import { uiReducer, uiSlice } from './ui/slice';
import { сoordinatesReducer, сoordinatesSlice } from './сoordinates/slice';
// import { RESET_STATE_ACTION_TYPE } from './actions/resetState';

const logger = createLogger({
  collapsed: true,
});

const reducers = {
  [сoordinatesSlice.name]: сoordinatesReducer,
  [forecastSlice.name]: forecastReducer,
  [searchSlice.name]: searchReducer,
  [uiSlice.name]: uiReducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

const rootReducer: Reducer<RootState> = (state, action) => {
  //   if (action.type === RESET_STATE_ACTION_TYPE) {
  //     state = {} as RootState;
  //   }

  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
  // devTools: process.env.NODE_ENV === 'development',
  devTools: true,
});

// eslint-disable-next-line import/no-unused-modules
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
