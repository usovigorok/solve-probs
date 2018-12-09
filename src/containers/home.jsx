import React from "react";
import ReactDOM from "react-dom";
import Menu from "../components/menu.jsx";
import Content from "../components/home/content.jsx";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-12">
          <Content />
        </div>
      </div>
    </div>
  );
};
export default Home;
