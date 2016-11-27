import leaflet from 'leaflet';
import React from 'react';
// import ReactDOM from 'react-dom';
import style from './styles/map/map.scss';

import bingo from './styles/minigames/bingo.png';
import crossword from './styles/minigames/crossword.png';
import hangman from './styles/minigames/hangman.png';
import jigsaw from './styles/minigames/jigsaw.png';
import memory from './styles/minigames/memory.png';
import numberline from './styles/minigames/numberline.png';

import locationViewSrc from './styles/map/location_view.png';

class Map extends React.Component {
  static propTypes() {
    return {
      width: React.PropTypes.number.isRequired,
      height: React.PropTypes.number.isRequired
    };
  }

  componentDidMount() {
    const mymap = leaflet.map(style.mapid).setView([50.844990, 4.351302], 13);
    leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(mymap);


    const icon = leaflet.icon({
      iconUrl: memory,
      // shadowUrl: 'leaf-shadow.png',

      iconSize: [50, 50], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    this.props.schedule.forEach((s) => {
      leaflet.marker(s.coord, { icon }).addTo(mymap)
                           .bindTooltip(`<b>${s.minigame}</b><br>
                                        <i>${s.task}</i><br>
                                        <small>${s.place}</small>`
                           )
        .openTooltip();
    });

    const latlngs = this.props.schedule.map(s => s.coord);
    const polyline = leaflet.polyline(latlngs, { color: 'red' }).addTo(mymap);
    // zoom the map to the polyline
    mymap.fitBounds(polyline.getBounds());

    // mymap.on('click', (e) => {
    //   new leaflet.marker(e.latlng, { icon }).addTo(mymap);
    // });
  }

  render() {
    return (
      <div>
        <div className="myrow">
          <div className="col-md-8">
            <div id={style.mapid} />
          </div>
          <div className="col-md-4">
            <h2>Minigames</h2>
            <div className="row">
              <div>
                <div className="col-md-3">
                  <a id="carousel-selector-0">
                    <img src={bingo} className="img-thumbnail" />
                  </a>
                </div>

                <div className="col-md-3">
                  <a id="carousel-selector-1">
                    <img src={crossword} className="img-thumbnail" />
                  </a>
                </div>

                <div className="col-md-3">
                  <a id="carousel-selector-2">
                    <img src={hangman} className="img-thumbnail" /></a>
                </div>

                <div className="col-md-3">
                  <a id="carousel-selector-3">
                    <img src={jigsaw} className="img-thumbnail" />
                  </a>
                </div>
              </div>
            </div>
            <div className="myrow">
              <div className="col-md-3">
                <a id="carousel-selector-4">
                  <img src={memory} className="img-thumbnail" /></a>
              </div>

              <div className="col-md-3">
                <a id="carousel-selector-5">
                  <img src={numberline} className="img-thumbnail" /></a>
              </div>
            </div>

            <div className="myrow">
              <div className="col-md-12">
                <h2>Location Info</h2>
                <img src={locationViewSrc} className={style.locationInfo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Map.defaultProps = {
  width: 1000,
  height: 1000,
  schedule: [
    {
      name: 'task 1',
      place: 'Grand Place',
      minigame: 'quiz',
      task: 'What was the original purpose of the Grand place?',
      coord: [50.846833, 4.352425]
    },
    {
      name: 'task 2',
      place: 'Nicholas Church',
      minigame: 'Spot the difference',
      task: 'Find 4 differences between the church now and 100 years ago',
      coord: [50.847853, 4.351447]
    },
    {
      name: 'task 3',
      place: 'Editions Jacques Brel',
      minigame: 'Video Challenge',
      task: 'Play the notes of the song "Amsterdam" by Jaques Brel',
      coord: [50.844194, 4.352123]
    },
    {
      name: 'task 4',
      place: 'Academie Royale Beaux Arts',
      minigame: 'Photo Challenge',
      task: 'Make photos of the 5 most beautiful paintings you can find',
      coord: [50.851231, 4.338045]
    }
  ]
};
// const pureComp = () => (
//   <div className={style.pureComp}>
//     pureComp
//   </div>
//   );


export default Map;
