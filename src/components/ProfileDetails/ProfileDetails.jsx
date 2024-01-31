import { selectUser } from 'components/redux/auth/slice';
import { logoutThunk } from 'components/redux/operations';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ProfileDetails.module.css';

export const ProfileDetails = () => {
  const { name, email } = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <details>
      <summary className={s.styleSummary}>{name}</summary>
      <ul className={s.styleList}>
        <li className={s.styleEmail}>{email}</li>
        <li>
          <button
            onClick={() => dispatch(logoutThunk())}
            className={s.styleButton}
          >
            Exit
          </button>
        </li>
      </ul>
    </details>
  );
};
