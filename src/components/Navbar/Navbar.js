import React from 'react';
import './Navbar.css';

//Component that takes in Props and uses them to render JSX to the DOM.
const Navbar = props => (
    <div className="navbar">
      <div>Click Game</div>
      <div className={props.navMsgColor}>{props.navMessage}</div>
      <div>
          Score: {props.score} <span className="pipe">|</span> High Score: {props.highScore}
      </div>
    </div>
)

export default Navbar;