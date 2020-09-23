import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Detail extends Component {
  render() {
    return (
      <div>
        <h1>Detail {this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default withRouter(Detail);
