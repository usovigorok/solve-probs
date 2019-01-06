import React, { Component } from "react";
import "./services.css";

class Services extends Component {
  render() {
    const height = `${window.innerHeight}px`;
    return (
      <div className="cover-image" style={{ height }}>
        <ul className="list-group">
          <li className="list-group-item">Relationships</li>
          <li className="list-group-item">Love</li>
          <li className="list-group-item">Self-confidence</li>
          <li className="list-group-item">Motivation</li>
          <li className="list-group-item">Harmony</li>
        </ul>
      </div>
    );
  }
}

export default Services;
