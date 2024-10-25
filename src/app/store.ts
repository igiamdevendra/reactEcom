import { configureStore } from '@reduxjs/toolkit'
import ecommerceSliceReducer from '../features/ecommerce/ecommerceSlice'
import { persistStore, persistReducer as CreatePersistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
}

const persistReducer = CreatePersistReducer(persistConfig, ecommerceSliceReducer)

export const store = configureStore({
  reducer: {
    products : persistReducer,   
  }
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch