import React from "react";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import Announce from './announce';

class Marker extends React.Component {

  render() {
    let classes = "marker";
    if (this.props.selected) {
      classes += " selected";
    }
    return (
      <div className={classes}>
        <img src={this.props.picture.url}/>
      </div>
    );
  }
}

export default Marker;
