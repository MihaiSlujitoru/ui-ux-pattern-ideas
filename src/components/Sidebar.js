import React, { useState } from 'react';
// import Nav from './Nav';
import TopNav from './TopNav';
import { Link } from 'gatsby';
import logo from '../assets/img/logo_transparent-new.png';

export default function SideBar({ sections = [] }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <>
      <header id="header">
        <div className="inner">
          <Link to="/" className="logo">
            <span className="symbol">
              <img src={logo} alt="UI/UX Pattern Ideas" />{' '}
            </span>
          </Link>
          {/* <TopNav onMenuClick={() => toggleHeader(!headerOpen)} /> */}
        </div>
      </header>
      {/* <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onClose={() => toggleHeader(!headerOpen)} />
      </div> */}
    </>
  );
}
