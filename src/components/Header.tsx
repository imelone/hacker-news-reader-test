import React from 'react';
import { NavLink } from 'react-router-dom';

//css
import  "../styles/header.css";

const Header = () => {
  return (
    <React.Fragment>
    <div className="header-bg">
      <h1>Hacker News</h1>
      <div className="nav-link">
        <NavLink to="/top" activeClassName="active">
          Top Stories
        </NavLink>
        <NavLink to="/new" activeClassName="active">
          Latest Stories
        </NavLink>
        <NavLink to="/best" activeClassName="active">
          Best Stories
        </NavLink>
      </div>
        </div>
    </React.Fragment>
  );
};

export default Header;
