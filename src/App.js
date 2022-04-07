import React from "react";
import "./App.css";
import { Header } from "./components";
import vid from "./images/bg.mp4";

const App = () => {
  return (
    <div className="App">
      <div className="video-wrapper">
        <video loop autoPlay muted id="video-bg">
          <source src={vid} type="video/mp4" />
        </video>
        <Header />
      </div>
      {/* <video loop autoPlay muted>
        <source src={vid} type="video/mp4" />
      </video> */}
    </div>
  );
};

export default App;
