import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
const Login = () => {
  return (
    <div className="login w-full px-8 py-12 flex flex-col items-center gap-4 text-[#1e272e]">
      <h1 className="text-3xl uppercase font-bold tracking-wide">login</h1>
      <div className="flex gap-4 items-center tracking-wide text-gray-600 py-2 px-8 bg-slate-100 rounded-4xl cursor-pointer w-full">
        <FontAwesomeIcon icon={faGoogle} />
        <h1>Login with google</h1>
      </div>
      <div className="flex items-center gap-1 text-sm text-(--gray-color) w-full">
        <div className="hr-line"></div>
        <p>OR</p>
        <div className="hr-line"></div>
      </div>
      <form action="" className="flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-4">
          <div className="form-input-container">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" id="email" />
            <p>Enter a valid email</p>
          </div>
          <div className="form-input-container">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" />
            <p>Enter a valid email</p>
          </div>
        </div>
        <button
          type="submit"
          className="capitalize text-md font-medium bg-(--primary-color) text-white py-2 rounded-4xl hover:bg-[#937dff] cursor-pointer"
        >
          sign in
        </button>
      </form>
    </div>
  );  
}

export default Login