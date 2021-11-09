import {pokemonApi} from '../lib/api/poketmon';
import {configureStore} from '@reduxjs/toolkit';
import countSlice from './countSlice';
import todoSlice from './todoSlice';

const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    count: countSlice,
    todos: todoSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch