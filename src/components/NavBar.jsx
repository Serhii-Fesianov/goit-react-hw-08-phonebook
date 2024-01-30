import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

export const NavBar = () => {
  return (
    <div className={s.NavBarWrapper}>
      <div className="">
        <Link to="/" className="">
          HOME | AUTH LESSON
        </Link>
      </div>
      <div className="">
        <ul className="">
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li>
            <details>
              <summary>Auth</summary>
              <ul className="">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
