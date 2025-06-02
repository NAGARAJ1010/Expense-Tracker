import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginRegisterPage = () => {
  
  const [selected, setSelected] = useState('login');
  const bgColor = selected === 'login' ? 'bg-red-500' : 'bg-green-500';
  return (
    <div className="login-register-container py-8 px-4 flex flex-col justify-center items-center">
      <label htmlFor="Toggle3" className={`inline-flex w-100 items-center rounded-3xl cursor-pointer dark:text-gray-100 bg-gray-700`}>
	      <input id="Toggle3" type="checkbox" className="hidden peer"/>
	      <span onClick={()=>setSelected('login')} className="text-center px-4 py-2 rounded-3xl dark:bg-(--primary-color) peer-checked:dark:bg-gray-700 w-1/2">Login</span>
	      <span onClick={()=>setSelected('register')} className="text-center px-4 py-2 rounded-3xl dark:bg-gray-700 peer-checked:dark:bg-(--primary-color) w-1/2">Register</span>
      </label>
      { selected === 'login' ?  <Login /> : <Register />}
    </div>
  );
}

export default LoginRegisterPage