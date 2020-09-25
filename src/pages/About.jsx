import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <h1>About {this.props.match.params.ss}</h1>
      </div>
    );
  }
}

export default withRouter(About);
