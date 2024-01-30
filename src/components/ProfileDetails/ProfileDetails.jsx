import { selectUser } from 'components/redux/auth/slice';
import { logoutThunk } from 'components/redux/operations';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ProfileDetails = () => {
  const { name, email } = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <details>
      <summary>{name}</summary>
      <ul className="">
        <li>{email}</li>
        <li>
          <button onClick={() => dispatch(logoutThunk())}>Exit</button>
        </li>
      </ul>
    </details>
  );
};
