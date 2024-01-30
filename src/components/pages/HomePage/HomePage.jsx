import React from 'react';
import { Link } from 'react-router-dom';
import s from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={s.wrapperStyle}>
      <div className={s.wrapperStyle}>
        <h1 className={s.titleStyle}>
          Contacts manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
        <Link to="/contacts" className={s.styleLink}>
          Get Started!&#128509;
        </Link>
      </div>
    </div>
  );
};
