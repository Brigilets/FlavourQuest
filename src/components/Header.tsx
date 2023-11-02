import "./Header.css";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <nav>
        <h1>FlavourQuest</h1>
        <section className="links">
          <NavLink to="/american">American</NavLink>
          <NavLink to="/asian">Asian</NavLink>
          <NavLink to="/eastern-european">Eastern-european</NavLink>
          <NavLink to="/french">French</NavLink>
          <NavLink to="italian">Italian</NavLink>
          <NavLink to="mediterranean">Mediterranian</NavLink>
        </section>
      </nav>
    </>
  );
};

export default Header;
