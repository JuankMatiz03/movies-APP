import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import  store, { persistor } from './state/store/store.tsx'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import React from 'react'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </BrowserRouter>,
  </React.StrictMode>
)

