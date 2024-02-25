import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux'; // Importa Provider desde react-redux
import { PersistGate } from 'redux-persist/integration/react';
import { Store, persistor } from './redux/store';

import './assets/scss/estilosPersonalizados.css';
// import App from '../views/App/App';
import Alumno from './views/Alumno/Alumno';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
        
        <PersistGate loading={null} persistor={persistor}>
          <Alumno />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
