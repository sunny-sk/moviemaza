import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import classes from './NavBar/NavBar.module.scss';
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-danger">
      <div className="container">
        <Link href="/">
          <Image
            src={'/images/icon-144x144.png'}
            width={54}
            height={54}
            className={`${classes['logo']}`}
            alt="Logo"
          />
        </Link>
        <ul className="navbar-nav mr-auto ml-2">
          <Link className="nav-item" href="/movies">
            <a className={`nav-link ${classes['navbar-x']}`}>Movies</a>
          </Link>
          {/* <Link href="/links">
            <a className={`nav-link ${classes['navbar-x']}`}>Links</a>
          </Link> */}
        </ul>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/up-coming">
                <a className={`nav-link ${classes['navbar-x']}`}>up coming</a>
              </Link>
            </li>

            {/* <li className="nav-item">
              <a className={`nav-link ${classes['navbar-x']}`}>About</a>
            </li> */}
          </ul>
          {/* 
          <div className="mr-0">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={`nav-link ${classes['navbar-x']}`}>
                  <i className="fa fa-user"></i> Login
                </a>
              </li>

              <li className="nav-item">
                <a className={`nav-link ${classes['navbar-x']}`}>
                  <i className="fa fa-user"></i> Email
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${classes['navbar-x']}`}>logout</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
