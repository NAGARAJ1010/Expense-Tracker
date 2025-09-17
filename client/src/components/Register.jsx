import '../css/login.css';
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
const Register = () => {
  const [showPassword, setShowPassword] = useState('hidden');
  const [showConPassword, setShowConPassword] = useState('hidden');
  const [togglePasswordIcon, setTogglePasswordIcon] = useState(false);
  const [toggleConPasswordIcon, setToggleConPasswordIcon] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const passwordHandler = (e) => {
        setInputValue(e.target.value);
  }
  return (
    <>
      <div className="form-input-container">
        <label htmlFor="name">Full name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-input-container">
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" />
      </div>
      <div className="form-input-container register">
        <label htmlFor="password">Password</label>
        <div
          className="relative"
          onFocus={() => setShowPassword("block")}
          onBlur={() => setShowPassword("hidden")}
          tabIndex={-1}
        >
          <input
            type={`${togglePasswordIcon ? "text" : "password"}`}
            id="password"
            onChange={(event) => passwordHandler(event)}
          />
          <div
            className={`eye-icon-container ${showPassword}`}
            onClick={() => setTogglePasswordIcon((prev) => !prev)}
          >
            <span className="eye-icon block">
              <FontAwesomeIcon icon={togglePasswordIcon ? faEye : faEyeSlash} />
            </span>
          </div>
        </div>
      </div>
      <div className="form-input-container register">
        <label htmlFor="confirm-password">Confirm password</label>
        <div
          className="relative"
          onFocus={() => setShowConPassword("block")}
          onBlur={() => setShowConPassword("hidden")}
          tabIndex={-1}
        >
          <input
            type={`${toggleConPasswordIcon ? "text" : "password"}`}
            id="confirm-password"
            onClick={() => setShowConPassword("block")}
            onChange={(e) => handlePassword(e)}
          />
          <div
            className={`eye-icon-container ${showConPassword}`}
            onClick={() => setToggleConPasswordIcon((prev) => !prev)}
          >
            <span className="eye-icon block">
              <FontAwesomeIcon
                icon={toggleConPasswordIcon ? faEye : faEyeSlash}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register