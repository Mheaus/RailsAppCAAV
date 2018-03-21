import React, { Component } from 'react';

class Test extends Component {
  render() {
    return (
      <div>Hello {this.props.announce.title}</div>
    );
  }
}

export default Test;
