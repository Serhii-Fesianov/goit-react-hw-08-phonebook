import React from 'react';
import { Link } from 'react-router-dom';
import s from './AuthDetails.module.css';

export const AuthDetails = () => {
  return (
    <details>
      <summary>Auth</summary>
      <ul className="">
        <li>
          <Link to="/login" className={s.styleLink}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className={s.styleLink}>
            Register
          </Link>
        </li>
      </ul>
    </details>
  );
};
