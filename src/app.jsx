import React from 'react';
import Map from './components/Map';

import Profile from './components/Profile';
import storyboardSrc from './components/styles/storyboard.png';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Authoring Environment</h1>
        <div className="row">
          <Map />
        </div>
        <div className="row">
          <h2>Storyboard</h2>
          <img src={storyboardSrc} className="" alt="alt" />
        </div>
        <div className="row">
          <Profile />
        </div>
      </div>
    );
  }
}
