import { loginThunk } from 'components/redux/operations';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import s from './LoginPage.module.css';

export const LoginPage = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    console.log(data);
    dispatch(loginThunk(data));
    reset();
  };
  return (
    <div className={s.wrapperLogin}>
      <div className={s.wrapperLogin}>
        <div className="">
          <h1 className={s.titleStyle}>Login now!😉</h1>
        </div>
        <div className="">
          <form className={s.formStyle} onSubmit={handleSubmit(submit)}>
            <div className={s.wrapperInputRow}>
              <label className="">
                <span className={s.titleStyleSpan}>Email</span>
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="email"
                className={s.inputStyle}
                required
              />
            </div>
            <div className={s.wrapperInputRow}>
              <label className="">
                <span className={s.titleStyleSpan}>Password</span>
              </label>
              <input
                {...register('password')}
                type="password"
                placeholder="password"
                className={s.inputStyle}
                required
              />
            </div>
            <div className="">
              <button className={s.buttonStyle}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
