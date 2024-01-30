import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './NavBar.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/auth/slice';
import { ProfileDetails } from './ProfileDetails/ProfileDetails';
import { AuthDetails } from './AuthDetails/AuthDetails';

export const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={s.NavBarWrapper}>
      <div className="">
        <Link to="/" className={s.styleLink}>
          HOME | AUTH LESSON
        </Link>
      </div>
      <div className="">
        <ul className="">
          <li>
            <NavLink to="/contacts" className={s.styleLink}>
              Contacts
            </NavLink>
          </li>
          <li>{isLoggedIn ? <ProfileDetails /> : <AuthDetails />}</li>
        </ul>
      </div>
    </div>
  );
};
