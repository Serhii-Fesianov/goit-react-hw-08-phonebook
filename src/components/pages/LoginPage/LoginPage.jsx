import React from 'react';

export const LoginPage = () => {
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
          <form className="">
            <div className="">
              <label className="">
                <span className="">Email</span>
              </label>
              <input type="email" placeholder="email" className="" required />
            </div>
            <div className="">
              <label className="">
                <span className="">Password</span>
              </label>
              <input
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
