import { registerThunk } from 'components/redux/operations';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import s from './RegisterPage.module.css';

export const RegisterPage = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    console.log(data);
    dispatch(registerThunk(data));
    reset();
  };
  return (
    <div className={s.wrapperRegister}>
      <div className={s.wrapperRegister}>
        <div className={s.wrapperRegister}>
          <h1 className={s.titleStyle}>Register now!</h1>
        </div>
        <div className={s.wrapperRegister}>
          <form className={s.formStyle} onSubmit={handleSubmit(submit)}>
            <div className={s.wrapperInputRow}>
              <label className="">
                <span className={s.titleStyleSpan}>Name</span>
              </label>
              <input
                {...register('name')}
                type="text"
                placeholder="Enter your name"
                className={s.inputStyle}
                required
              />
            </div>
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
              <button className={s.buttonStyle}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
