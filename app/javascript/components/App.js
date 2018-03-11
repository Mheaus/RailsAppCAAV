import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Announce from './announce';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);

    const announces = props.announces;

    this.state = {
      announces,
      allAnnounces: announces,
      selectedAnnounce: announces[1],
      search: ''
    };
  }

  selectAnnounce = announce => {
    this.setState({
      selectedAnnounce: announce
    });
  };

  handleSearch = event => {
    this.setState({
      search: event.target.value,
      announces: this.state.allAnnounces.filter(announce =>
        new RegExp(event.target.value, 'i').exec(announce.title)
      )
    });
  };

  render() {
    let center = {
      lat: 48.8566,
      lng: 2.3522
    };
    if (this.state.selectedAnnounce) {
      center = {
        lat: this.state.selectedAnnounce.lat,
        lng: this.state.selectedAnnounce.lng
      };
    }
    return (
      <div>
        <header id="index-header">
          <a href="/">
            <img src="/assets/favicon.ico" alt="logo link home" className="_logo"/>
          </a>
          <div className="__search-input">
            <input type="search" className="_input" placeholder="« Essayez Bordeaux »" value={this.state.search}
            onChange={this.handleSearch}></input>
            <svg className="svg-inline--fa fa-search fa-w-16" aria-hidden="true" data-prefix="fa" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
              <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </div>
        </header>
        <section id="__main-index">
          <div className="__announces-index">
            {this.state.announces.map(announce => {
              return (
                <Announce
                  key={announce.title}
                  announce={announce}
                  selectAnnounce={this.selectAnnounce}
                />
              );
            })}
          </div>
          <div className="_map">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyBeqtEur5dcqenuIuMjrfAoY2r39SqH_V4'
              }}
              center={center}
              zoom={14}
            >
              {this.state.announces.map(announce => {
                return (
                  <Marker
                    key={announce.title}
                    {...announce}
                    selected={announce === this.state.selectedAnnounce}
                  />
                );
              })}
            </GoogleMapReact>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
