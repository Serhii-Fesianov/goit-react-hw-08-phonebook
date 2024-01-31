import React from 'react';
import { Link } from 'react-router-dom';
import s from './AuthDetails.module.css';

export const AuthDetails = () => {
  return (
    <details>
      <summary className={s.styleSummary}>Auth 🔐</summary>
      <ul className={s.styleListLink}>
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
