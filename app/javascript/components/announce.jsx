import React from "react";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

class Announce extends React.Component {
  render() {
    const announceId = `announce-item${this.props.id}`
    const title = `${this.props.title}`
    const description = `${this.props.description}`
    const imageUrl = `${this.props.picture.url.match(/(?:[^\/][\d\w\.]+)$/)}`
    const announcePath = `/announces/${this.props.id}`
    return (
      <div className="_announce-item" id={announceId} onClick={this.handleClick}>
        <Image
          publicId={imageUrl}
          cloudName="mathieuadbrt"
          className="_announce-picture"
        ></Image>
      <a href={announcePath} className="__info-container">
          <span className="_announce-location">Mérignac, 33</span>
          <span className="_announce-title">{title}</span>
          <p className="_announce-description">{description}</p>
        </a>
      </div>
    );
  }

  handleClick = () => {
    this.props.selectAnnounce(this.props.announce);
  }
}

export default Announce;
