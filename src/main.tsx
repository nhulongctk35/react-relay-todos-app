import {RelayEnvironmentProvider} from 'react-relay';
import {RelayEnvironment} from './RelayEnvironment';
import {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={<p>loading...</p>}>
      <App />
    </Suspense>
  </RelayEnvironmentProvider>,
);
