import { registerThunk } from 'components/redux/operations';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export const RegisterPage = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    console.log(data);
    dispatch(registerThunk(data));
    reset();
  };
  return (
    <div className="">
      <div className="">
        <div className="">
          <h1 className="">Register now!</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos ad laudantium ex. Nam molestiae et velit assumenda,
            consectetur sint vel qui ullam ducimus dolor commodi cupiditate
            laboriosam voluptates temporibus eius.
          </p>
        </div>
        <div className="">
          <form className="" onSubmit={handleSubmit(submit)}>
            <div className="">Try again... Something went wrong!</div>

            <div className="">
              <label className="">
                <span className="">Name</span>
              </label>
              <input
                {...register('name')}
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="">
              <label className="">
                <span className="">Email</span>
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="email"
                className="input input-bordered"
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
              <button className="">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
