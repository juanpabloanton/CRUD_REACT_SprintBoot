import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux'; // Importa Provider desde react-redux
import { PersistGate } from 'redux-persist/integration/react';
import { Store, persistor } from './redux/store';

import './index.css';
// import App from '../views/App/App';
import Persona from './views/Persona/Persona';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <Persona />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
