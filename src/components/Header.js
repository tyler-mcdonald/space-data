import { useState } from "react";
import { Link } from "react-router-dom";

import { ToggleMenu } from "./ToggleMenu";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const classes = isActive ? "navbar-links active" : "navbar-links";

  const handleToggle = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <nav className="navbar">
      <div className="brand-title">SpaceX Launches</div>
      <ToggleMenu toggle={handleToggle} />
      <div className={classes}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/launches/upcoming">Upcoming Launches</Link>
          </li>
          <li>
            <Link to="/launches/past">Past Launches</Link>
          </li>
          <li>
            <Link to="/launches/data">Detailed Launch Data</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
