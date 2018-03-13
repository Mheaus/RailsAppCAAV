import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class GMap extends Component {
  render() {
    let center = {
      lat: 44.9740103,
      lng: -0.7947671
    };
    return (
      <div className="_map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBeqtEur5dcqenuIuMjrfAoY2r39SqH_V4' }}
          center={center}
          zoom={9}
          >
          <Marker
            lat={44.852918}
            lng={-0.572300}
            text={'Home'}
            />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GMap;
