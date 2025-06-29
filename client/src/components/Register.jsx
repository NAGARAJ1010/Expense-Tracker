import '../css/login.css';
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
const Register = () => {
    const [showPassword, setShowPassword] = useState('hidden');
    const [inputValue, setInputValue] = useState('');
    const passwordHandler = (e) => {
        setInputValue(e.target.value);
        setShowPassword(inputValue.trim() !== '' ? 'block' : 'hidden');
    }
  return (
    <form action="" className="register-form flex flex-col gap-4">
      <div className="form-input-container">
        <label htmlFor="name">Full name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-input-container">
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" />
      </div>
      <div className="form-input-container">
        <label htmlFor="password">Password</label>
        <div className="relative">
          <input type="password" id="password" onChange={(event)=>passwordHandler(event)}/>
          <span className={`eye-icon ${showPassword}`}>
          <FontAwesomeIcon icon={faEye} />
          </span>
          <span className={`eye-icon ${showPassword}`}>
          <FontAwesomeIcon icon={faEyeSlash} />
          </span>
        </div>
      </div>
      <div className="form-input-container">
        <label htmlFor="confirm-password">Confirm password</label>
        <div className="relative">
          <input type="password" id="confirm-password" />
          <FontAwesomeIcon icon={faEye} className="eye-icon" />
          <FontAwesomeIcon icon={faEyeSlash} className="eye-icon" />
        </div>
      </div>
    </form>
  );
}

export default Register