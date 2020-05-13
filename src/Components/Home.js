import React from "react";


import "./Home.css";

const Home = () => {
  return (
    <div>
     

      <div className="row">
        <div className="col l3">
          <img className="baby" src="https://s.cdpn.io/3/kiwi.svg" />
        </div>
        <div className="col s7" id="home-content">
          <p>
            <h1>
              <b>Welcome</b>
            </h1>{" "}
            <h3>to Swahili Data Aggregator for more than</h3>
            <h6>
              {" "}
              four famous blogs and social medias which automatic refresh after
              one hour{" "}
            </h6>
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
