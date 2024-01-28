import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import './assets/i18n';

import { App } from './components/App';
import { persistor, store } from './redux/store';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter
      basename="/phonebook-react-ts"
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <ToastContainer
            className="Toastify__toast-body"
            position="top-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

