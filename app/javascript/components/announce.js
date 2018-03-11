import React from "react";

class Announce extends React.Component {
  render() {
    const announceId = `announce-item${this.props.announce.id}`
    const title = `${this.props.announce.title}`
    const description = `${this.props.announce.description}`
    return (
      <a className="_announce-item" id={announceId} onClick={this.handleClick}>
        <img src="" alt=""/>
        <div className="__info-container">
          <span className="_announce-location">Mérignac, 33</span>
          <span className="_announce-title">{title}</span>
          <p className="_announce-description">{description}</p>
        </div>
      </a>
    );
  }

  handleClick = () => {
    // this.props.selectAnnounce(this.props.announce);
  }
}

export default Announce;
