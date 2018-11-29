import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App/App';
import { Providers } from './context/Providers';

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('root')
);

// Hot Module Replacement if (module.hot) {  module.hot.accept(); }
