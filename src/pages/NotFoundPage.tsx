import React from "react";
import { NavLink } from "react-router-dom";
import "./Page.css";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <section className="notFoundP">
        <h2>404 Page not found</h2>
        <NavLink to="/" >
          Back to home
        </NavLink>
      </section>
    </>
  );
};

export default NotFoundPage;
