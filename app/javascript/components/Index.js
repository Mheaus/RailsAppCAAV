import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
class Index extends React.Component {
  render () {
    return (
      <div>
        Greeting: {this.props.greeting}
        <h1>ahahahh</h1>
      </div>
    );
  }
}

Index.propTypes = {
  greeting: PropTypes.string
};
export default Index
