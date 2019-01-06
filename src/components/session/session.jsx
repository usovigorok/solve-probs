import React, { Component } from "react";
import Pack from "./pack";

class Session extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Pack sessionCount={1} price={20} />
          </div>
          <div className="col-md-4">
            <Pack sessionCount={3} price={50} />
          </div>
          <div className="col-md-4">
            <Pack sessionCount={10} price={100} />
          </div>
        </div>
      </div>
    );
  }
}

export default Session;
