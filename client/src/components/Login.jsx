import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/login.css";
import { useState } from "react";
const Login = () => {
  const [showPassword, setShowPassword] = useState("hidden");
  const [toggleIcon, setToggleIcon] = useState(false);
  const [inputValue, setInputValue] = useState("");
  let isEyeClicked = true;
  const handlePassword = (e) => {
    
  }

  const toggleEyeIcon = () => {
    setToggleIcon(prev => !prev);
  }
  return (
    <>
      <div className="form-input-container">
        <label htmlFor="name">Full name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-input-container relative">
        <label htmlFor="password">Password</label>
        <input
          type={`${toggleIcon ? 'text' : 'password'}`}
          id="password"
          onClick={() => setShowPassword("block")}
          onChange={(e) => handlePassword(e)}
        />
        <div className={`eye-icon-container ${showPassword}`} onClick={toggleEyeIcon}>
          <span className="eye-icon block">
            <FontAwesomeIcon icon={toggleIcon ? faEye : faEyeSlash} />
          </span>
        </div>
      </div>
      <p className="bottom-msg text-xs text-end">
        <a href="#" className="text-(--primary-color)">
          Forgot password?
        </a>
      </p>
    </>
  );
};

export default Login;
