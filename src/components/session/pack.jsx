import React, { Component } from "react";

const pack = props => {
  const style = {
    margin: 10
  };

  const sessionsString = props.sessionCount > 1 ? "sessions" : "session";

  return (
    <div className="card" style={style}>
      <div className="card-body">
        <h5 className="card-title">{props.sessionCount} session</h5>
        <p className="card-text">
          Get {props.sessionCount} {sessionsString} for {props.price} euro
        </p>
        <a href="#" className="btn btn-primary">
          Book now
        </a>
      </div>
    </div>
  );
};

export default pack;
