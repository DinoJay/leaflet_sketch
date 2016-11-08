import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './app.scss';
import React from 'react';

import Map from './components/Map';

console.log('app is initialized');

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Map />
      </div>
    );
  }
}
