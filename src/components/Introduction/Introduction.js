import "./introduction.scss";
import React, { useEffect, useRef } from "react";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      showCursor:true,
      strings: ["Programmer","Software Developer", "Web Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/dheeraj.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="rightWrapper">
          <h2>Hi there, I'm</h2>
          <h1>Dheeraj Bharti</h1>
          <h3>
             <span ref={textRef}> </span>
          </h3>
        </div>
        <a href="#experience">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
