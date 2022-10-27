import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar">
      <div className="brand-title">SpaceX Launches</div>
      <div className="navbar-links">
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
