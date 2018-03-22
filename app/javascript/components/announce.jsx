import React from "react";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

class Announce extends React.Component {
  render() {
    const announceId = `announce-item${this.props.id}`
    const title = `${this.props.title}`
    const description = `${this.props.description.substring(0,120)}...`
    const imageUrl = `${this.props.picture.url.match(/(?:[^\/][\d\w\.]+\w{3,4})$/)}`
    const announcePath = `/announces/${this.props.id}`
    return (
      <div className="_announce-item" id={announceId} onClick={this.handleClick}>
        <div className="__image-link">
          <Image
            publicId={imageUrl}
            cloudName="mathieuadbrt"
            className="_announce-picture"
          />
          <div className="__btn-container">
            <a href={announcePath} className="_btn-show-announce" target="_blank">Voir l'Annonce</a>
          </div>
        </div>
        <div className="__info-container">
          <span className="_announce-location">{this.props.address}</span>
          <span className="_announce-title">{title}</span>
          <p className="_announce-description">{description}</p>
        </div>
      </div>
    );
  }

  handleClick = () => {
    this.props.selectAnnounce(this.props.announce);
  }
}

export default Announce;
