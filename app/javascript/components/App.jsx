import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Announce from './announce';
import GMap from './GMap';
import Marker from './marker';

function UserLogged(props) {
  return (
    <div className="__auth">
      <a href="/users/show/" className="_dashboard">Votre Compte</a>
      <a href="/users/sign_out" method="post" className="_disconnect">Déconnexion</a>
    </div>
  );
}

function GuestActions(props) {
  return (
    <div className="__auth">
      <a href="/users/sign_up" className="_sign-in">Inscription</a>
      <a href="/users/sign_in" className="_log-in">Connexion</a>
    </div>
  )
}

function Auth(props) {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return <UserLogged />;
  } else {
    return <GuestActions />;
  }
}

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
    console.log(announce);
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
    return (
      <div className="__root-react">
        <header id="index-header">
          <div className="__main-header">
            <a href="/">
              <img src="https://raw.githubusercontent.com/Mheaus/RailsAppCAAV/master/app/assets/images/favicon.ico" alt="logo link home" className="_logo"/>
            </a>
            <div className="__search-input">
              <input type="search" className="_input" placeholder="« Essayez Bordeaux »" value={this.state.search}
              onChange={this.handleSearch}></input>
              <svg className="svg-inline--fa fa-search fa-w-16" aria-hidden="true" data-prefix="fa" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </div>
          </div>
          <Auth />
        </header>
        <section id="__main-index">
          <div className="__announces-index">
            {this.state.announces.map(announce => {
              return (
                <Announce
                  key={announce.title}
                  announce={announce}
                  {...announce}
                  selectAnnounce={this.selectAnnounce}
                />
              );
            })}
            <a className="_announce-item" id="announce-item__add" href="/">
              <div className="__image-link">
                <img src="https://raw.githubusercontent.com/Mheaus/RailsAppCAAV/master/app/assets/images/favicon.ico" alt="logo" className="_logo"/>
              </div>
              <div className="__info-container">

                <span className="_announce-title">Ajoutez votre annonce</span>
                <p className="_announce-description"></p>
              </div>
            </a>
          </div>
          <GMap
            announces={this.state.announces}
            selectedAnnounce={this.state.selectedAnnounce}
          />
        </section>
      </div>
    );
  }
}

export default App;
