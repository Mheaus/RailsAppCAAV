import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class GMap extends Component {
  render() {
    let center = {
      lat: 44.9740103,
      lng: -0.7947671
    };
    if (this.props.selectedAnnounce) {
      center = {
        lat: this.props.selectedAnnounce.latitude,
        lng: this.props.selectedAnnounce.longitude
      };
    }
    return (
      <div className="_map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBeqtEur5dcqenuIuMjrfAoY2r39SqH_V4' }}
          center={center}
          zoom={11}
          >
          {this.props.announces.map(announce => {
            return (
              <Marker
                key={announce.title}
                {...announce}
                lat={announce.latitude}
                lng={announce.longitude}
                selected={announce === this.props.selectedAnnounce}
              />
            )
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GMap;
