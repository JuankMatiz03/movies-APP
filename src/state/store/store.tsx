import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import moviesReducer from '../reducers/movieSlice';

/**
 * Se realiza la inicializacion de la store
 * se implementa persistStore para la persistencia de datos en caso de que se renderice nuevamente el componente
 * se excluye la propiedad 'register' de la persistencia 
*/

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['register']
};

const persistedReducer = persistReducer(persistConfig, moviesReducer);

export const store = configureStore({
  reducer: {
    movies: persistedReducer,
  },
});

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
