import { loginThunk } from 'components/redux/operations';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export const LoginPage = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    console.log(data);
    dispatch(loginThunk(data));
    reset();
  };
  return (
    <div className="">
      <div className="">
        <div className="">
          <h1 className="">Login now!</h1>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            libero, quisquam aut sapiente deserunt saepe non ex minus iusto
            facere modi expedita repudiandae quia pariatur. Obcaecati non
            quisquam quod debitis!
          </p>
        </div>
        <div className="">
          <form className="" onSubmit={handleSubmit(submit)}>
            <div className="">
              <label className="">
                <span className="">Email</span>
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="email"
                className=""
                required
              />
            </div>
            <div className="">
              <label className="">
                <span className="">Password</span>
              </label>
              <input
                {...register('password')}
                type="password"
                placeholder="password"
                className=""
                required
              />
            </div>
            <div className="">
              <button className="">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
