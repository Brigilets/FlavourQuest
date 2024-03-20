import "./Header.css";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 879px)" });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Stop event propagation
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      return setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutsideListener = handleClickOutside;
    document.addEventListener("click", handleClickOutsideListener);
    return () => {
      document.removeEventListener("click", handleClickOutsideListener);
    };
  }, []);

  return (
    <>
      <nav data-testid="header">
        <NavLink to="/">
          <h1>FlavourQuest</h1>
        </NavLink>
        {isMobile ? (
          <button
            className="menu-button"
            onClick={toggleDropdown}
            ref={dropdownRef}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        ) : (
          <section className="links">
            <NavLink to="/american">American</NavLink>
            <NavLink to="/asian">Asian</NavLink>
            <NavLink to="/eastern-european">Eastern-european</NavLink>
            <NavLink to="/french">French</NavLink>
            <NavLink to="/italian">Italian</NavLink>
            <NavLink to="/mediterranean">Mediterranean</NavLink>
          </section>
        )}
        {isOpen && (
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/american">American</NavLink>
            </li>
            <li>
              <NavLink to="/asian">Asian</NavLink>
            </li>
            <li>
              <NavLink to="/eastern-european">Eastern-european</NavLink>
            </li>
            <li>
              <NavLink to="/french">French</NavLink>
            </li>
            <li>
              <NavLink to="/italian">Italian</NavLink>
            </li>
            <li>
              <NavLink to="/mediterranean">Mediterranean</NavLink>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Header;
