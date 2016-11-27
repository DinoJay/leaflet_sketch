// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';

import './globalStyles/index.scss'

render(<AppContainer><App /></AppContainer>, document.querySelector('#app'));

if (module.hot) {
  module.hot.accept('./app.jsx', () => {
    const App = require('./app.jsx').default;
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.querySelector('#app')
    );
  });
}

